import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/preset/index.ts", "src/plugin/index.ts"],
  external: ["@pandacss/dev", "@pandacss/types"],
  format: ["cjs", "esm"],
  plugins: [visualizer()],
});
