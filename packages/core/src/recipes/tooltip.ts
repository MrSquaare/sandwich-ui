import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineSlotRecipe({
  base: {
    content: {
      "&[data-state='closed']": {
        animation: "popoverOut 0.2s ease",
      },
      animation: "popoverIn 0.2s ease",
      bg: "bg.inverted",
      border: "2px solid {colors.bg.inverted}",
      color: "text.inverted",
      px: 3,
      py: 1.5,
      zIndex: "tooltip",
    },
    positioner: {},
    root: {},
    trigger: {},
  },
  className: "tooltip",
  slots: ["root", "trigger", "positioner", "content"],
});
