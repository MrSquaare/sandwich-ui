import { defineRecipe } from "@pandacss/dev";

export const AvatarRecipe = defineRecipe({
  className: "avatar",
  description: "Avatar component styles",
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
