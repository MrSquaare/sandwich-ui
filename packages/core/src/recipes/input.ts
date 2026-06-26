import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  base: {
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    _focus: {
      boxShadow: "medium",
      outline: "none",
    },
    _invalid: {
      borderColor: "danger",
    },
    bg: "surface",
    border: "2px solid {colors.border}",
    borderRadius: "0",
    boxShadow: "none",
    color: "text",
    display: "block",
    fontWeight: "600",
    outline: "none",
    transition: "box-shadow 0.1s",
    w: "full",
  },
  className: "input",
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: {
        fontSize: "md",
        px: "3.5",
        py: "2.5",
      },
      md: {
        fontSize: "sm",
        px: "3",
        py: "2",
      },
      sm: {
        fontSize: "xs",
        px: "2.5",
        py: "1.5",
      },
    },
  },
});
