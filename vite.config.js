import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/travel-greeting-app/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        greeting: resolve(__dirname, "greeting.html"),
        greeting: resolve(__dirname, "./sakura-js/dist/sakura.min.js"),
      },
    },
  },
});