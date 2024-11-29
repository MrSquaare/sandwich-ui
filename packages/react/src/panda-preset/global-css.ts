import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "html, body": {
    bg: {
      base: "white",
      _dark: "black",
    },
    color: {
      base: "black",
      _dark: "white",
    },
  },
});
