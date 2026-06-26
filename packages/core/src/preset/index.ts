import { definePreset } from "@pandacss/dev";

import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";
import { recipes } from "./recipes";
import { semanticTokens, tokens } from "./tokens";

const preset = definePreset({
  globalCss,
  name: "sandwich-ui",
  theme: {
    extend: {
      keyframes,
      recipes,
      semanticTokens,
      tokens,
    },
  },
});

export default preset;
