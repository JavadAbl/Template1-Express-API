// build.js

import { build } from "esbuild";

build({
  entryPoints: ["dist/index.js"],
  bundle: true,
  platform: "node",
  target: ["node24"],
  outfile: "dist/bundle.cjs",
  format: "cjs", // ES module output
  external: ["fs", "path"],

  /*   loader: { ".js": "js" }, // treat .js as ESM
  define: { require: "undefined" }, // optional safety net */
});

/* build({
  entryPoints: ["dist/index.js"],
  bundle: true,
  platform: "node", // Node.js runtime
  target: ["node24"], // Adjust to your Node version
  outfile: "dist/bundle.js",
  external: ["fs", "path"], // Keep built‑ins external
  minify: true,
}).catch(() => process.exit(1)); */
