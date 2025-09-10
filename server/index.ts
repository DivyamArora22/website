import express, { type Request, Response, NextFunction } from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
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

  const originalResJson = res.json;
  // @ts-expect-error overload alignment
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    // @ts-expect-error overload alignment
    return originalResJson.apply(res, [bodyJson, ...args]);
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

function initOnce() {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      // keep original behavior
      throw err;
    });

    // Dev: use Vite middleware after routes; Prod: serve built static
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Local dev server ONLY — never listen on Vercel
    if (process.env.VERCEL !== "1") {
      const port = process.env.PORT || 8000;
      server.listen(
        {
          port: Number(port),
          host: "0.0.0.0",
          reusePort: true,
        },
        () => log(`serving on port ${port}`)
      );
    }
  })();

  return initPromise;
}

// Vercel serverless entrypoint
export default async function handler(req: VercelRequest, res: VercelResponse) {
  await initOnce();
  // @ts-ignore: Express app is a request handler (req,res)
  app(req, res);
}

// For local dev (so `node server/index.ts` still works if you use it)
if (process.env.VERCEL !== "1") {
  initOnce().catch((e) => {
    console.error("Failed to init server:", e);
    process.exit(1);
  });
}
