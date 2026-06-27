import type { ComponentProps, ComponentRef } from "react";

import * as ArkMenu from "@ark-ui/react/menu";
import { menu } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const menuFactory = createSlotRecipeComponentFactory(menu);

export const Menu = menuFactory.createProviderComponent(
  ArkMenu.MenuRoot,
  "root",
  "Menu",
);
export type MenuProps = ComponentProps<typeof Menu>;
export type MenuRef = ComponentRef<typeof Menu>;

export const MenuTrigger = menuFactory.createConsumerComponent(
  ArkMenu.MenuTrigger,
  "trigger",
  "MenuTrigger",
);
export type MenuTriggerProps = ComponentProps<typeof MenuTrigger>;
export type MenuTriggerRef = ComponentRef<typeof MenuTrigger>;

export const MenuPositioner = menuFactory.createConsumerComponent(
  ArkMenu.MenuPositioner,
  "positioner",
  "MenuPositioner",
);
export type MenuPositionerProps = ComponentProps<typeof MenuPositioner>;
export type MenuPositionerRef = ComponentRef<typeof MenuPositioner>;

export const MenuContent = menuFactory.createConsumerComponent(
  ArkMenu.MenuContent,
  "content",
  "MenuContent",
);
export type MenuContentProps = ComponentProps<typeof MenuContent>;
export type MenuContentRef = ComponentRef<typeof MenuContent>;

export const MenuItem = menuFactory.createConsumerComponent(
  ArkMenu.MenuItem,
  "item",
  "MenuItem",
);
export type MenuItemProps = ComponentProps<typeof MenuItem>;
export type MenuItemRef = ComponentRef<typeof MenuItem>;

export const MenuSeparator = menuFactory.createConsumerComponent(
  ArkMenu.MenuSeparator,
  "separator",
  "MenuSeparator",
);
export type MenuSeparatorProps = ComponentProps<typeof MenuSeparator>;
export type MenuSeparatorRef = ComponentRef<typeof MenuSeparator>;
