import { definePreset } from "@pandacss/dev";

import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";

const preset = definePreset({
  theme: {
    extend: {
      keyframes: keyframes,
    },
  },
  globalCss: globalCss,
});

export default preset;
