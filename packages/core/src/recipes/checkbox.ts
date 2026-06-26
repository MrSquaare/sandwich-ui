import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineSlotRecipe({
  base: {
    control: {
      _checked: {
        bg: "primary",
      },
      _indeterminate: {
        bg: "primary",
      },
      alignItems: "center",
      bg: "surface",
      border: "2px solid {colors.border}",
      borderRadius: "0",
      boxShadow: "none",
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "center",
      transition: "background-color 0.1s",
    },
    indicator: {
      "& svg": {
        stroke: "currentColor",
        strokeWidth: "4px",
      },
      alignItems: "center",
      color: "white",
      display: "inline-flex",
      justifyContent: "center",
    },
    label: {
      cursor: "pointer",
      fontWeight: "600",
      userSelect: "none",
    },
    root: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      gap: "2",
      verticalAlign: "top",
    },
  },
  className: "checkbox",
  defaultVariants: {
    size: "md",
  },
  slots: ["root", "label", "control", "indicator"],
  variants: {
    size: {
      lg: {
        control: {
          h: "7",
          w: "7",
        },
        indicator: {
          "& svg": {
            h: "4",
            w: "4",
          },
        },
        label: {
          fontSize: "base",
        },
      },
      md: {
        control: {
          h: "6",
          w: "6",
        },
        indicator: {
          "& svg": {
            h: "3.5",
            w: "3.5",
          },
        },
        label: {
          fontSize: "sm",
        },
      },
      sm: {
        control: {
          h: "5",
          w: "5",
        },
        indicator: {
          "& svg": {
            h: "3",
            w: "3",
          },
        },
        label: {
          fontSize: "xs",
        },
      },
    },
  },
});
