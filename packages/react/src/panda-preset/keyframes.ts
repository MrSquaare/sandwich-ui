import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  popoverIn: {
    "0%": {
      opacity: 0,
      scale: 0.95,
    },
    "100%": {
      opacity: 1,
      scale: 1,
    },
  },
  popoverOut: {
    "0%": {
      opacity: 1,
      scale: 1,
    },
    "100%": {
      opacity: 0,
      scale: 0.95,
    },
  },
});
