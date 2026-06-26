import { defineSlotRecipe } from "@pandacss/dev";

export const cardRecipe = defineSlotRecipe({
  base: {
    description: {
      color: "text.muted",
      fontSize: "md",
    },
    root: {
      bg: "surface",
      border: "2px solid {colors.border}",
      boxShadow: "medium",
    },
    section: {
      "&:has(+ &)": {
        paddingBottom: "0",
      },
      padding: "4",
    },
    separator: {
      borderTop: "2px solid {colors.border}",
    },
    title: {
      fontSize: "xl",
      fontWeight: "800",
      textTransform: "uppercase",
    },
  },
  className: "card",
  slots: ["root", "section", "separator", "title", "description"],
});
