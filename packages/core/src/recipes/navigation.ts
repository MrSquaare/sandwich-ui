import { defineRecipe } from "@pandacss/dev";

export const NavigationRecipe = defineRecipe({
  className: "navigation",
  description: "Navigation component styles",
  base: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    maxW: "full",
    zIndex: 10,
  },
});

export const NavigationListRecipe = defineRecipe({
  className: "navigation-list",
  description: "Navigation list component styles",
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    spaceX: 1,
    listStyleType: "none",
  },
});
