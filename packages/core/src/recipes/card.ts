import { RecipeVariant, cva } from "@sandwich-ui/core/css";

export const CardRecipe = cva({
  base: {
    bg: { base: "white", _dark: "black" },
    color: { base: "black", _dark: "white" },
    border: "1px solid",
    borderColor: { base: "neutral.200", _dark: "neutral.800" },
    borderRadius: "lg",
    divideY: "1px",
    divideColor: { base: "neutral.200", _dark: "neutral.800" },
  },
});

export type CardRecipeVariant = RecipeVariant<typeof CardRecipe>;

export const CardHeaderRecipe = cva({
  base: {
    px: 4,
    py: 2,
  },
});

export type CardHeaderRecipeVariant = RecipeVariant<typeof CardHeaderRecipe>;

export const CardTitleRecipe = cva({
  base: {
    fontSize: "lg",
    fontWeight: "bold",
  },
});

export type CardTitleRecipeVariant = RecipeVariant<typeof CardTitleRecipe>;

export const CardDescriptionRecipe = cva({
  base: {
    fontSize: "sm",
    color: { base: "neutral.600", _dark: "neutral.400" },
  },
});

export type CardDescriptionRecipeVariant = RecipeVariant<
  typeof CardDescriptionRecipe
>;

export const CardBodyRecipe = cva({
  base: {
    px: 4,
    py: 2,
  },
});

export type CardBodyRecipeVariant = RecipeVariant<typeof CardBodyRecipe>;

export const CardFooterRecipe = cva({
  base: {
    px: 4,
    py: 2,
  },
});

export type CardFooterRecipeVariant = RecipeVariant<typeof CardFooterRecipe>;
