import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    lib: {
      entry: {
        "preset/index": "./src/preset/index.ts",
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [/^@pandacss.*/, /^@sandwich-ui.*/],
    },
  },
  plugins: [dts(), tsconfigPaths(), visualizer()],
});
