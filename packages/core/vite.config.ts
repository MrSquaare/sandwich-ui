import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        "preset/index": "./src/preset/index.ts",
        "recipes/index": "./src/recipes/index.ts",
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [/^@pandacss.*/, /^@sandwich-ui.*/],
    },
  },
  plugins: [
    dts({
      copyDtsFiles: true,
    }),
    tsconfigPaths(),
    visualizer(),
  ],
});
