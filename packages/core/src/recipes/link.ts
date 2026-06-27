import { defineRecipe } from "@pandacss/dev";

export const linkRecipe = defineRecipe({
  base: {
    _hover: {
      bg: "primary",
      color: "text.inverted",
    },
    color: "primary",
    fontWeight: "800",
    mx: "-1",
    px: "1",
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "2px",
    transition: "background-color 0.1s, color 0.1s",
  },
  className: "link",
});
