import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [
    {
      name: "js-as-jsx",
      enforce: "pre",
      async transform(code, id) {
        if (id.includes("node_modules") || !id.endsWith(".js")) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react({
      include: "**/*.{jsx,js,tsx,ts}",
    }),
    tailwindcss(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      "@": src,
      "next/image": path.resolve(src, "lib/next-compat/image.jsx"),
      "next/link": path.resolve(src, "lib/next-compat/link.jsx"),
      "next/navigation": path.resolve(src, "lib/next-compat/navigation.js"),
      "next/dynamic": path.resolve(src, "lib/next-compat/dynamic.jsx"),
      "next/font/google": path.resolve(src, "lib/next-compat/font-google.js"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
});
