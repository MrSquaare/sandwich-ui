import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  base: {
    alignItems: "center",
    border: "2px solid {colors.border}",
    display: "inline-flex",
    fontWeight: "800",
    justifyContent: "center",
    lineHeight: 1,
    textTransform: "uppercase",
  },
  className: "badge",
  defaultVariants: {
    color: "primary",
    size: "md",
    type: "filled",
  },
  variants: {
    color: {
      danger: {
        "--color": "colors.danger",
        "--text": "colors.white",
      },
      info: {
        "--color": "colors.info",
        "--text": "colors.black",
      },
      primary: {
        "--color": "colors.primary",
        "--text": "colors.white",
      },
      secondary: {
        "--color": "colors.secondary",
        "--text": { _dark: "colors.black", base: "colors.white" },
      },
      success: {
        "--color": "colors.success",
        "--text": "colors.white",
      },
      warning: {
        "--color": "colors.warning",
        "--text": "colors.black",
      },
    },
    size: {
      lg: {
        fontSize: "xl",
        px: 3,
        py: 1.5,
      },
      md: {
        fontSize: "base",
        px: 2,
        py: 1,
      },
      sm: {
        fontSize: "xs",
        px: 1,
        py: 0.5,
      },
    },
    type: {
      filled: {
        bg: "var(--color)",
        borderColor: "border",
        color: "var(--text)",
      },
      outlined: {
        bg: "transparent",
        borderColor: "var(--color)",
        color: "var(--color)",
      },
    },
  },
});
