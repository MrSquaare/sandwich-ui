import { defineConfig } from "@pandacss/dev";
import sandwichUIPreset from "@sandwich-ui/core/preset";

export default defineConfig({
  preflight: true,
  prefix: "sw",
  presets: ["@pandacss/dev/presets", sandwichUIPreset],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  importMap: "@sandwich-ui/core",
  outdir: "./node_modules/@sandwich-ui/core/styled-system",
  staticCss: {
    recipes: "*",
  },
});
