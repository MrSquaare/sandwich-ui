import { definePreset } from "@pandacss/dev";

import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";

const preset = definePreset({
  name: "sandwich-ui",
  theme: {
    extend: {
      keyframes: keyframes,
    },
  },
  globalCss: globalCss,
});

export default preset;
