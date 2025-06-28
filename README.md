# Portfolio Website

This project is built with Node.js, React, and Express. It uses ES modules for all
server-side code.

## Node Version

Node.js 20 introduces `import.meta.dirname` for ES modules. To remain compatible
with Node versions below 20, the project defines `__dirname` manually using
`fileURLToPath(import.meta.url)` in configuration and server files. Running the
application therefore requires **Node 18 or later**.

