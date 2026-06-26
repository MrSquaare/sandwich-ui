import { defineRecipe } from "@pandacss/dev";

export const selectRecipe = defineRecipe({
  base: {
    _dark: {
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
    },
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
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
    backgroundPosition: "right 0.75rem center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.25rem 1.25rem",
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
  className: "select",
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: {
        fontSize: "md",
        pr: "12",
        px: "3.5",
        py: "2.5",
      },
      md: {
        fontSize: "sm",
        pr: "10",
        px: "3",
        py: "2",
      },
      sm: {
        fontSize: "xs",
        pr: "8",
        px: "2.5",
        py: "1.5",
      },
    },
  },
});
