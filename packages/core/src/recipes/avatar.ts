import { defineSlotRecipe } from "@pandacss/dev";

export const avatarRecipe = defineSlotRecipe({
  base: {
    fallback: {
      alignItems: "center",
      color: "white",
      display: "inline-flex",
      fontWeight: "800",
      h: "full",
      justifyContent: "center",
      lineHeight: 1,
      textTransform: "uppercase",
      w: "full",
    },
    image: {
      h: "full",
      objectFit: "cover",
      w: "full",
    },
    root: {
      bg: "primary",
      border: "2px solid {colors.border}",
      boxShadow: "medium",
      overflow: "hidden",
    },
  },
  className: "avatar",
  defaultVariants: {
    size: "md",
  },
  slots: ["root", "fallback", "image"],
  variants: {
    size: {
      lg: {
        fallback: {
          fontSize: "30",
        },
        root: {
          h: "24",
          w: "24",
        },
      },
      md: {
        fallback: {
          fontSize: "20",
        },
        root: {
          h: "16",
          w: "16",
        },
      },
      sm: {
        fallback: {
          fontSize: "12.5",
        },
        root: {
          h: "10",
          w: "10",
        },
      },
    },
  },
});
