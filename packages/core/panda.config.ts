import { defineConfig } from "@pandacss/dev";

import sandwichUIPreset from "./src/preset";

export default defineConfig({
  importMap: "@sandwich-ui/core",
  include: ["./src/**/*.ts"],
  outdir: "styled-system",
  prefix: "sw",
  preflight: true,
  presets: ["@pandacss/dev/presets", sandwichUIPreset],
  staticCss: {
    recipes: "*",
  },
});
