import { defineSlotRecipe } from "@pandacss/dev";

export const menuRecipe = defineSlotRecipe({
  base: {
    content: {
      "&[data-state='closed']": {
        animation: "popoverOut 0.2s ease",
      },
      animation: "popoverIn 0.2s ease",
      bg: "surface",
      border: "2px solid {colors.border}",
      boxShadow: "medium",
      minW: "8rem",
      zIndex: "menu",
    },
    item: {
      _hover: {
        bg: "primary",
        color: "white",
      },
      bg: "transparent",
      cursor: "pointer",
      fontSize: "sm",
      fontWeight: "800",
      m: "1",
      p: "2",
      textTransform: "uppercase",
      transition: "background-color 0.1s, color 0.1s",
    },
    positioner: {},
    root: {},
    separator: {
      borderTop: "2px solid {colors.border}",
    },
    trigger: {
      cursor: "pointer",
    },
  },
  className: "menu",
  slots: ["root", "trigger", "positioner", "content", "item", "separator"],
});
