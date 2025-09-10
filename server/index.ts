import express, { type Request, Response, NextFunction } from "express";
// ⛔ removed: import type { VercelRequest, VercelResponse } from "@vercel/node";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// request logger for /api routes
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // keep original json, and reassign with a typed-safe wrapper
  const originalResJson = res.json.bind(res) as (body: any, ...args: any[]) => Response;

  (res as Response & { json: (body: any, ...args: any[]) => Response }).json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

// Bootstrap once (cold start on Vercel; once on local)
let initPromise: Promise<void> | null = null;

function initOnce(): Promise<void> {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      console.error(err);
    });

    // Dev: Vite middleware after routes; Prod: serve built static
    // On Vercel, static files are served by the platform so we skip this step
    if (process.env.VERCEL !== "1") {
      if (app.get("env") === "development") {
        await setupVite(app, server);
      } else {
        serveStatic(app);
      }
    }

    // Local dev server ONLY — never listen on Vercel
    if (process.env.VERCEL !== "1") {
      const port = Number(process.env.PORT || 8000);
      server.listen(
        { port, host: "0.0.0.0", reusePort: true },
        () => log(`serving on port ${port}`)
      );
    }
  })();

  return initPromise;
}

// Vercel serverless entrypoint
export default async function handler(req: any, res: any) {
  await initOnce();
  // Express app is a request handler
  (app as any)(req, res);
}

// For local dev (so `node server/index.ts` still works if you use it)
if (process.env.VERCEL !== "1") {
  initOnce().catch((e) => {
    console.error("Failed to init server:", e);
    process.exit(1);
  });
}
