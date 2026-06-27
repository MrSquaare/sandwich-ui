import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: [
    "react",
    "react-dom",
    "@pandacss/dev",
    "@pandacss/types",
    "@ark-ui/react",
    /^@sandwich-ui\/styled-system(\/.*)?$/,
  ],
  format: ["cjs", "esm"],
  plugins: [visualizer()],
});
