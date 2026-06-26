import { defineSlotRecipe } from "@pandacss/dev";

export const switchRecipe = defineSlotRecipe({
  base: {
    control: {
      _checked: {
        bg: "primary",
      },
      alignItems: "center",
      bg: "surface",
      border: "2px solid {colors.border}",
      borderRadius: "0",
      boxShadow: "none",
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      p: "2px",
      transition: "background-color 0.1s",
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
      position: "relative",
      verticalAlign: "top",
    },
    thumb: {
      bg: "surface",
      border: "2px solid {colors.border}",
      borderRadius: "0",
      boxShadow: "none",
      display: "block",
      transition: "transform 0.15s ease-out, background-color 0.1s",
    },
  },
  className: "switch",
  defaultVariants: {
    size: "md",
  },
  slots: ["root", "label", "control", "thumb"],
  variants: {
    size: {
      lg: {
        control: {
          h: "7",
          w: "12",
        },
        label: {
          fontSize: "base",
        },
        root: {
          gap: "3",
        },
        thumb: {
          _checked: {
            transform: "translateX(20px)",
          },
          h: "5",
          w: "5",
        },
      },
      md: {
        control: {
          h: "6",
          w: "10",
        },
        label: {
          fontSize: "sm",
        },
        root: {
          gap: "3",
        },
        thumb: {
          _checked: {
            transform: "translateX(16px)",
          },
          h: "4",
          w: "4",
        },
      },
      sm: {
        control: {
          h: "5",
          w: "8",
        },
        label: {
          fontSize: "xs",
        },
        root: {
          gap: "2",
        },
        thumb: {
          _checked: {
            transform: "translateX(12px)",
          },
          h: "3",
          w: "3",
        },
      },
    },
  },
});
