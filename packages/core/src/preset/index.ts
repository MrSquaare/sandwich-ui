import { definePreset } from "@pandacss/dev";

import {
  AvatarRecipe,
  BadgeRecipe,
  ButtonRecipe,
  CardBodyRecipe,
  CardDescriptionRecipe,
  CardFooterRecipe,
  CardHeaderRecipe,
  CardRecipe,
  CardTitleRecipe,
  MenuContentRecipe,
  MenuItemRecipe,
  NavigationListRecipe,
  NavigationRecipe,
  TooltipContentRecipe,
} from "../recipes";

import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";

const preset = definePreset({
  name: "sandwich-ui",
  theme: {
    extend: {
      keyframes: keyframes,
    },
    recipes: {
      avatar: AvatarRecipe,
      badge: BadgeRecipe,
      button: ButtonRecipe,
      card: CardRecipe,
      cardHeader: CardHeaderRecipe,
      cardTitle: CardTitleRecipe,
      cardDescription: CardDescriptionRecipe,
      cardBody: CardBodyRecipe,
      cardFooter: CardFooterRecipe,
      menuContent: MenuContentRecipe,
      menuItem: MenuItemRecipe,
      navigation: NavigationRecipe,
      navigationList: NavigationListRecipe,
      tooltipContent: TooltipContentRecipe,
    },
  },
  globalCss: globalCss,
});

export default preset;
