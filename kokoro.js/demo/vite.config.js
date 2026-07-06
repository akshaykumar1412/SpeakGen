import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "kokoro-js": fileURLToPath(new URL("../src/kokoro.js", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["kokoro-js"],
  },
  worker: { format: "es" },
  build: {
    target: "esnext",
  },
});