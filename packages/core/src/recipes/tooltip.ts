import { defineRecipe } from "@pandacss/dev";

export const TooltipContentRecipe = defineRecipe({
  className: "tooltip-content",
  description: "Tooltip content component styles",
  base: {
    bg: { base: "white", _dark: "black" },
    color: { base: "black", _dark: "white" },
    border: "1px solid",
    borderColor: { base: "neutral.200", _dark: "neutral.800" },
    borderRadius: "md",
    fontSize: "sm",
    px: 3,
    py: 1.5,
    zIndex: 50,
    animation: "popoverIn 0.2s ease",
    "&[data-state='closed']": {
      animation: "popoverOut 0.2s ease",
    },
  },
});
