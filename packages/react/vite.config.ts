import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: "./src/index.ts",
        "panda-preset/index": "./src/panda-preset/index.ts",
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@ark-ui/react",
        "@pandacss/dev",
      ],
    },
  },
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
    }),
  ],
});
