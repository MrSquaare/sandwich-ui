import type { ComponentProps, ComponentRef } from "react";

import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import { radioGroup } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const radioGroupFactory = createSlotRecipeComponentFactory(radioGroup);

export const RadioGroup = radioGroupFactory.createProviderComponent(
  ArkRadioGroup.Root,
  "root",
  "RadioGroup",
);
export type RadioGroupProps = ComponentProps<typeof RadioGroup>;
export type RadioGroupRef = ComponentRef<typeof RadioGroup>;

export const RadioGroupLabel = radioGroupFactory.createConsumerComponent(
  ArkRadioGroup.Label,
  "label",
  "RadioGroupLabel",
);
export type RadioGroupLabelProps = ComponentProps<typeof RadioGroupLabel>;
export type RadioGroupLabelRef = ComponentRef<typeof RadioGroupLabel>;

export const RadioGroupItem = radioGroupFactory.createConsumerComponent(
  ArkRadioGroup.Item,
  "item",
  "RadioGroupItem",
);
export type RadioGroupItemProps = ComponentProps<typeof RadioGroupItem>;
export type RadioGroupItemRef = ComponentRef<typeof RadioGroupItem>;

export const RadioGroupItemText = radioGroupFactory.createConsumerComponent(
  ArkRadioGroup.ItemText,
  "itemText",
  "RadioGroupItemText",
);
export type RadioGroupItemTextProps = ComponentProps<typeof RadioGroupItemText>;
export type RadioGroupItemTextRef = ComponentRef<typeof RadioGroupItemText>;

export const RadioGroupItemControl = radioGroupFactory.createConsumerComponent(
  ArkRadioGroup.ItemControl,
  "itemControl",
  "RadioGroupItemControl",
);
export type RadioGroupItemControlProps = ComponentProps<
  typeof RadioGroupItemControl
>;
export type RadioGroupItemControlRef = ComponentRef<
  typeof RadioGroupItemControl
>;

export const RadioGroupItemHiddenInput = ArkRadioGroup.ItemHiddenInput;
export type RadioGroupItemHiddenInputProps = ComponentProps<
  typeof RadioGroupItemHiddenInput
>;
export type RadioGroupItemHiddenInputRef = ComponentRef<
  typeof RadioGroupItemHiddenInput
>;
