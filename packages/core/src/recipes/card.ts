import { defineRecipe } from "@pandacss/dev";

export const CardRecipe = defineRecipe({
  className: "card",
  description: "Card component styles",
  base: {
    bg: { base: "white", _dark: "black" },
    color: { base: "black", _dark: "white" },
    border: "1px solid",
    borderColor: { base: "neutral.200", _dark: "neutral.800" },
    borderRadius: "lg",
    divideY: "1px",
    divideColor: { base: "neutral.200", _dark: "neutral.800" },
  },
});

export const CardHeaderRecipe = defineRecipe({
  className: "card-header",
  description: "Card header component styles",
  base: {
    px: 4,
    py: 2,
  },
});

export const CardTitleRecipe = defineRecipe({
  className: "card-title",
  description: "Card title component styles",
  base: {
    fontSize: "lg",
    fontWeight: "bold",
  },
});

export const CardDescriptionRecipe = defineRecipe({
  className: "card-description",
  description: "Card description component styles",
  base: {
    fontSize: "sm",
    color: { base: "neutral.600", _dark: "neutral.400" },
  },
});

export const CardBodyRecipe = defineRecipe({
  className: "card-body",
  description: "Card body component styles",
  base: {
    px: 4,
    py: 2,
  },
});

export const CardFooterRecipe = defineRecipe({
  className: "card-footer",
  description: "Card footer component styles",
  base: {
    px: 4,
    py: 2,
  },
});
