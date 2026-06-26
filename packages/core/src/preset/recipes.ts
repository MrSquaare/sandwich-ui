import type { RecipeConfig, SlotRecipeConfig } from "@pandacss/dev";

import { avatarRecipe } from "../recipes/avatar";
import { badgeRecipe } from "../recipes/badge";
import { buttonRecipe } from "../recipes/button";
import { cardRecipe } from "../recipes/card";
import { checkboxRecipe } from "../recipes/checkbox";
import { fieldRecipe } from "../recipes/field";
import { inputRecipe } from "../recipes/input";
import { linkRecipe } from "../recipes/link";
import { markRecipe } from "../recipes/mark";
import { menuRecipe } from "../recipes/menu";
import { navigationListRecipe, navigationRecipe } from "../recipes/navigation";
import { radioGroupRecipe } from "../recipes/radio-group";
import { selectRecipe } from "../recipes/select";
import { switchRecipe } from "../recipes/switch";
import { textareaRecipe } from "../recipes/textarea";
import { tooltipRecipe } from "../recipes/tooltip";

export const recipes: Record<string, RecipeConfig> = {
  badge: badgeRecipe,
  button: buttonRecipe,
  input: inputRecipe,
  link: linkRecipe,
  mark: markRecipe,
  navigation: navigationRecipe,
  select: selectRecipe,
  textarea: textareaRecipe,
};

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  avatar: avatarRecipe,
  card: cardRecipe,
  checkbox: checkboxRecipe,
  field: fieldRecipe,
  menu: menuRecipe,
  navigationList: navigationListRecipe,
  radioGroup: radioGroupRecipe,
  switchRecipe: switchRecipe,
  tooltip: tooltipRecipe,
};
