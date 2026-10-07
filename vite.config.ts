import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Relative base so the build works on any static host, including GitHub Pages subpaths
  base: "./",
  plugins: [react(), tailwindcss()],
});
