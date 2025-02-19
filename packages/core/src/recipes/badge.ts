import { RecipeVariant, cva } from "@sandwich-ui/core/css";

export const BadgeRecipe = cva({
  base: {
    display: "inline-flex",
    border: "1px solid transparent",
    borderRadius: "full",
  },
  variants: {
    size: {
      sm: {
        fontSize: "xs",
        px: 1,
        py: 0.25,
      },
      md: {
        fontSize: "base",
        px: 2,
        py: 0.5,
      },
      lg: {
        fontSize: "lg",
        px: 3,
        py: 1,
      },
    },
    variant: {
      filled: {
        bg: { base: "black", _dark: "white" },
        color: { base: "white", _dark: "black" },
      },
      outlined: {
        bg: { base: "white", _dark: "black" },
        color: { base: "black", _dark: "white" },
        borderColor: { base: "neutral.200", _dark: "neutral.800" },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

export type BadgeRecipeVariant = RecipeVariant<typeof BadgeRecipe>;
export type BadgeVariant = BadgeRecipeVariant["variant"];
export type BadgeSize = BadgeRecipeVariant["size"];
