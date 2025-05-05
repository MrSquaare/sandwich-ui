import { defineRecipe } from "@pandacss/dev";

export const MenuContentRecipe = defineRecipe({
  className: "menu-content",
  description: "Menu content styles",
  base: {
    bg: { base: "white", _dark: "black" },
    color: { base: "black", _dark: "white" },
    border: "1px solid",
    borderColor: { base: "neutral.200", _dark: "neutral.800" },
    borderRadius: "md",
    fontSize: "sm",
    minW: "8rem",
    p: 1,
    zIndex: 50,
    animation: "popoverIn 0.2s ease",
    "&[data-state='closed']": {
      animation: "popoverOut 0.2s ease",
    },
  },
});

export const MenuItemRecipe = defineRecipe({
  className: "menu-item",
  description: "Menu item styles",
  base: {
    color: { base: "black", _dark: "white" },
    fontSize: "sm",
    borderRadius: "md",
    px: 2,
    py: 1.5,
    cursor: "pointer",
    transition: "colors",
    _hover: {
      bg: { base: "neutral.100", _dark: "neutral.900" },
    },
  },
});
