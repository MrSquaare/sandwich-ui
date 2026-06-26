import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
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
    resize: "vertical",
    transition: "box-shadow 0.1s",
    w: "full",
  },
  className: "textarea",
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: {
        fontSize: "md",
        minH: "24",
        px: "3.5",
        py: "2.5",
      },
      md: {
        fontSize: "sm",
        minH: "20",
        px: "3",
        py: "2",
      },
      sm: {
        fontSize: "xs",
        minH: "16",
        px: "2.5",
        py: "1.5",
      },
    },
  },
});
