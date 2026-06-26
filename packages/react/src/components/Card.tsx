import type { ComponentRef, ComponentType } from "react";

import { ark } from "@ark-ui/react";
import { card } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const cardFactory = createSlotRecipeComponentFactory(card);

export const Card = cardFactory.createProviderComponent(
  ark.div,
  "root",
  "Card",
);
export type CardProps = ComponentType<typeof Card>;
export type CardRef = ComponentRef<typeof Card>;

export const CardSection = cardFactory.createConsumerComponent(
  ark.div,
  "section",
  "CardSection",
);
export type CardSectionProps = ComponentType<typeof CardSection>;
export type CardSectionRef = ComponentRef<typeof CardSection>;

export const CardSeparator = cardFactory.createConsumerComponent(
  ark.hr,
  "separator",
  "CardSeparator",
);
export type CardSeparatorProps = ComponentType<typeof CardSeparator>;
export type CardSeparatorRef = ComponentRef<typeof CardSeparator>;

export const CardTitle = cardFactory.createConsumerComponent(
  ark.h3,
  "title",
  "CardTitle",
);
export type CardTitleProps = ComponentType<typeof CardTitle>;
export type CardTitleRef = ComponentRef<typeof CardTitle>;

export const CardDescription = cardFactory.createConsumerComponent(
  ark.p,
  "description",
  "CardDescription",
);
export type CardDescriptionProps = ComponentType<typeof CardDescription>;
export type CardDescriptionRef = ComponentRef<typeof CardDescription>;
