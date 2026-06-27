import { defineSlotRecipe } from "@pandacss/dev";

export const fieldRecipe = defineSlotRecipe({
  base: {
    errorText: {
      color: "danger",
      fontSize: "xs",
      fontWeight: "600",
      lineHeight: "1.2",
    },
    helperText: {
      color: "text.muted",
      fontSize: "xs",
      lineHeight: "1.2",
    },
    label: {
      color: "text",
      cursor: "pointer",
      fontSize: "sm",
      fontWeight: "600",
      lineHeight: "1.2",
      userSelect: "none",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      w: "full",
    },
  },
  className: "field",
  slots: ["root", "label", "helperText", "errorText"],
});
