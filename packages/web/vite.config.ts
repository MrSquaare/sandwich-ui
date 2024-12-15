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
        "lit",
        /^@zag-js\/.*/,
        "@pandacss/dev",
        /^@sandwich-ui\/core\/.*/,
      ],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      copyDtsFiles: true,
    }),
  ],
});
