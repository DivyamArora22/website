// server/vite.ts
import type { Express } from "express";
import express from "express";
import type { Server as HttpServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger, type InlineConfig } from "vite";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * Attach Vite dev middleware in development (after routes).
 * In production, call `serveStatic(app)` instead.
 */
export async function setupVite(app: Express, server: HttpServer) {
  const vite = await createViteServer({
    ...(viteConfig as InlineConfig),
    configFile: false,      // use the imported config object
    appType: "custom",      // we're mounting as middleware
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: {
      middlewareMode: true,
      hmr: { server },
      // must be literal `true` or string[], not a widened boolean
      allowedHosts: true,
    },
  });

  // Mount Vite's connect instance
  app.use(vite.middlewares);

  // Serve index.html via Vite (dev only)
  app.use("*", async (req, res, next) => {
    try {
      const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      // bust cache on the dev entry for quick reloads
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).setHeader("Content-Type", "text/html");
      res.end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * Serve the built frontend in production.
 * Your Vite outDir is `dist/public` (repo-root), so point there.
 */
export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}. ` +
      `Make sure to build the client first (vite build).`
    );
  }

  app.use(express.static(distPath));

  // SPA fallback
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
