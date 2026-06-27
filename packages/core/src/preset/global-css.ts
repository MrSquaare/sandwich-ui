import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "*": {
    _focusVisible: {
      outline: "2px solid {colors.primary}",
      outlineOffset: "2px",
    },
  },
  "::selection": {
    bg: "primary",
    color: "white",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: "800",
  },
  "html, body": {
    bg: "bg",
    color: "text",
  },
});
