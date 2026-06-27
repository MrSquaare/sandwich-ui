import { defineRecipe } from "@pandacss/dev";

export const markRecipe = defineRecipe({
  base: {
    bg: "primary",
    color: "white",
    fontWeight: "800",
    px: "1.5",
    py: "0.5",
  },
  className: "mark",
});
