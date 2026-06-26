import { defineRecipe, defineSlotRecipe } from "@pandacss/dev";

export const navigationRecipe = defineRecipe({
  base: {
    bg: "surface",
    border: "2px solid {colors.border}",
    boxShadow: "medium",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    minH: "16",
  },
  className: "navigation",
  defaultVariants: {},
  variants: {
    sticky: {
      true: {
        position: "sticky",
        top: 0,
        zIndex: "navigation",
      },
    },
  },
});

export const navigationListRecipe = defineSlotRecipe({
  base: {
    brand: {
      alignItems: "center",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: "lg",
      fontWeight: "900",
      px: 6,
      textTransform: "uppercase",
    },
    item: {
      display: "inline-flex",
    },
    link: {
      _hover: {
        bg: "primary",
        color: "white",
      },
      alignItems: "center",
      color: "text",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "sm",
      fontWeight: "800",
      px: 6,
      textTransform: "uppercase",
      transition: "background-color 0.1s, color 0.1s",
    },
    list: {
      "& > *": {
        borderRight: "2px solid {colors.border}",
      },
      display: "flex",
    },
  },
  className: "navigation-list",
  defaultVariants: {},
  slots: ["list", "brand", "item", "link"],
  variants: {
    position: {
      center: {
        list: {
          borderLeft: "2px solid {colors.border}",
          gridColumn: "2",
          justifySelf: "center",
        },
      },
      left: {
        list: {
          gridColumn: "1",
          justifySelf: "start",
        },
      },
      right: {
        list: {
          "& > *": {
            borderLeft: "2px solid {colors.border}",
            borderRight: "none",
          },
          gridColumn: "3",
          justifySelf: "end",
        },
      },
    },
  },
});
