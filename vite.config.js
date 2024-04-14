import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Cloud-Point/",
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
      },
    },
  },
});
