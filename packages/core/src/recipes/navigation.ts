import { RecipeVariant, cva } from "@sandwich-ui/core/css";

export const NavigationRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    maxW: "full",
    zIndex: 10,
  },
});

export type NavigationRecipeVariant = RecipeVariant<typeof NavigationRecipe>;

export const NavigationListRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    spaceX: 1,
    listStyleType: "none",
  },
});

export type NavigationListRecipeVariant = RecipeVariant<
  typeof NavigationListRecipe
>;
