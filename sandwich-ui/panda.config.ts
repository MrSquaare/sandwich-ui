import { defineConfig } from "@pandacss/dev";

import sandwichUIPreset from "./src/panda-preset";

export default defineConfig({
  preflight: true,
  prefix: "sw",
  presets: ["@pandacss/dev/presets", sandwichUIPreset],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  importMap: "styled-system",
  outdir: "src/styled-system",
});
