import { definePreset } from "@pandacss/dev";

import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";
import { recipes, slotRecipes } from "./recipes";
import { semanticTokens, tokens } from "./tokens";

const preset = definePreset({
  globalCss,
  name: "sandwich-ui",
  theme: {
    extend: {
      keyframes,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default preset;
