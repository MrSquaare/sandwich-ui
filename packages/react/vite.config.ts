import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: "./src/index.ts",
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@ark-ui.*/,
        /^@zag-js.*/,
        /^@pandacss.*/,
        /^@sandwich-ui.*/,
      ],
    },
  },
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
    }),
    visualizer(),
  ],
});
