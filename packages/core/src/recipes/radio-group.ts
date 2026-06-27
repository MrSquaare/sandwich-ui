import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupRecipe = defineSlotRecipe({
  base: {
    item: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      gap: "2",
      verticalAlign: "top",
    },
    itemControl: {
      _checked: {
        _after: {
          bg: "primary",
          content: '""',
          display: "block",
        },
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
    itemText: {
      cursor: "pointer",
      fontWeight: "600",
      userSelect: "none",
    },
    label: {
      fontSize: "sm",
      fontWeight: "600",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "3",
    },
  },
  className: "radioGroup",
  defaultVariants: {
    size: "md",
  },
  slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
  variants: {
    size: {
      lg: {
        itemControl: {
          _checked: {
            _after: {
              h: "3",
              w: "3",
            },
          },
          h: "7",
          w: "7",
        },
        itemText: {
          fontSize: "base",
        },
      },
      md: {
        itemControl: {
          _checked: {
            _after: {
              h: "2.5",
              w: "2.5",
            },
          },
          h: "6",
          w: "6",
        },
        itemText: {
          fontSize: "sm",
        },
      },
      sm: {
        itemControl: {
          _checked: {
            _after: {
              h: "2",
              w: "2",
            },
          },
          h: "5",
          w: "5",
        },
        itemText: {
          fontSize: "xs",
        },
      },
    },
  },
});
