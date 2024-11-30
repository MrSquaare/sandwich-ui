import { RecipeVariant, cva } from "@sandwich-ui/core/css";

export const AvatarRecipe = cva({
  base: {
    borderRadius: "full",
    overflow: "hidden",
  },
  variants: {
    size: {
      sm: {
        w: "10",
        h: "10",
      },
      md: {
        w: "16",
        h: "16",
      },
      lg: {
        w: "24",
        h: "24",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarRecipeVariant = RecipeVariant<typeof AvatarRecipe>;

export type AvatarSize = AvatarRecipeVariant["size"];
