import { defineConfig } from "@pandacss/dev";
import sandwichUIPreset from "@sandwich-ui/core/preset";

export default defineConfig({
  preflight: true,
  prefix: "sw",
  presets: ["@pandacss/dev/presets", sandwichUIPreset],
  include: [
    "./node_modules/@sandwich-ui/core/dist/panda.buildinfo.json",
    "./src/**/*.ts",
  ],
  importMap: "@sandwich-ui/core",
  outdir: "./node_modules/@sandwich-ui/core/dist/styled-system",
});
