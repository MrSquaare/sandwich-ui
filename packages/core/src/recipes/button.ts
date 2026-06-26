import { defineRecipe } from "@pandacss/dev";

import {
  shadowActiveEffectHelper,
  shadowHoverEffectHelper,
} from "../helpers/effects";
import { shadowTokens } from "../preset/tokens";

export const buttonRecipe = defineRecipe({
  base: {
    alignItems: "center",
    border: "2px solid {colors.border}",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "800",
    justifyContent: "center",
    lineHeight: 1,
    textTransform: "uppercase",
  },
  className: "button",
  compoundVariants: [
    {
      css: {
        ...shadowHoverEffectHelper,
        ...shadowActiveEffectHelper,
      },
      variant: ["filled", "outlined"],
    },
    {
      color: "secondary",
      css: {
        _hover: {
          boxShadow: shadowTokens.bold,
        },
        borderColor: "primary",
        boxShadow: shadowTokens.medium,
        shadowColor: "primary",
      },
      variant: "filled",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    variant: "filled",
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
        px: 10,
        py: 4,
      },
      md: {
        fontSize: "base",
        px: 8,
        py: 3,
      },
      sm: {
        fontSize: "xs",
        px: 6,
        py: 2,
      },
    },
    variant: {
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
