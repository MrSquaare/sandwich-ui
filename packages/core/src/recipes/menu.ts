import { RecipeVariant, cva } from "@sandwich-ui/core/css";

export const MenuContentRecipe = cva({
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

export type MenuContentRecipeVariant = RecipeVariant<typeof MenuContentRecipe>;

export const MenuItemRecipe = cva({
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

export type MenuItemRecipeVariant = RecipeVariant<typeof MenuItemRecipe>;
