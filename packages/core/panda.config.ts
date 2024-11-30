import { defineConfig } from "@pandacss/dev";

import sandwichUIPreset from "./src/preset";

export default defineConfig({
  preflight: true,
  prefix: "sw",
  presets: ["@pandacss/dev/presets", sandwichUIPreset],
  include: ["./src/**/*.ts"],
  importMap: "@sandwich-ui/core",
  outdir: "src/styled-system",
});
