import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "PluginTemplate",
      formats: ["es", "iife"],
      fileName: (format) => `halo-plugin-template.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "@halo-dev/shared", "@halo-dev/components"],
      output: {
        globals: {
          vue: "Vue",
          "@halo-dev/components": "components",
        },
      },
    },
  },
});
