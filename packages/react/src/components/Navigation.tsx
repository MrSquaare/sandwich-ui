import type { ComponentProps, ComponentRef } from "react";

import { ark } from "@ark-ui/react";
import { navigation, navigationList } from "@sandwich-ui/styled-system/recipes";

import {
  createRecipeComponent,
  createSlotRecipeComponentFactory,
} from "../utilities/panda";

export const Navigation = createRecipeComponent(
  navigation,
  ark.nav,
  "Navigation",
);

export type NavigationProps = ComponentProps<typeof Navigation>;
export type NavigationRef = ComponentRef<typeof Navigation>;

const navigationListFactory = createSlotRecipeComponentFactory(navigationList);

export const NavigationList = navigationListFactory.createProviderComponent(
  ark.ul,
  "list",
  "NavigationList",
);

export type NavigationListProps = ComponentProps<typeof NavigationList>;
export type NavigationListRef = ComponentRef<typeof NavigationList>;

export const NavigationBrand = navigationListFactory.createConsumerComponent(
  ark.div,
  "brand",
  "NavigationBrand",
);

export type NavigationBrandProps = ComponentProps<typeof NavigationBrand>;
export type NavigationBrandRef = ComponentRef<typeof NavigationBrand>;

export const NavigationItem = navigationListFactory.createConsumerComponent(
  ark.li,
  "item",
  "NavigationItem",
);

export type NavigationItemProps = ComponentProps<typeof NavigationItem>;
export type NavigationItemRef = ComponentRef<typeof NavigationItem>;

export const NavigationLink = navigationListFactory.createConsumerComponent(
  ark.a,
  "link",
  "NavigationLink",
);

export type NavigationLinkProps = ComponentProps<typeof NavigationLink>;
export type NavigationLinkRef = ComponentRef<typeof NavigationLink>;
