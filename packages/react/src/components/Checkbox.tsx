import type { ComponentProps, ComponentRef } from "react";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { checkbox } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const checkboxFactory = createSlotRecipeComponentFactory(checkbox);

export const Checkbox = checkboxFactory.createProviderComponent(
  ArkCheckbox.Root,
  "root",
  "Checkbox",
);
export type CheckboxProps = ComponentProps<typeof Checkbox>;
export type CheckboxRef = ComponentRef<typeof Checkbox>;

export const CheckboxControl = checkboxFactory.createConsumerComponent(
  ArkCheckbox.Control,
  "control",
  "CheckboxControl",
);
export type CheckboxControlProps = ComponentProps<typeof CheckboxControl>;
export type CheckboxControlRef = ComponentRef<typeof CheckboxControl>;

export const CheckboxLabel = checkboxFactory.createConsumerComponent(
  ArkCheckbox.Label,
  "label",
  "CheckboxLabel",
);
export type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>;
export type CheckboxLabelRef = ComponentRef<typeof CheckboxLabel>;

export const CheckboxIndicator = checkboxFactory.createConsumerComponent(
  ArkCheckbox.Indicator,
  "indicator",
  "CheckboxIndicator",
);
export type CheckboxIndicatorProps = ComponentProps<typeof CheckboxIndicator>;
export type CheckboxIndicatorRef = ComponentRef<typeof CheckboxIndicator>;

export const CheckboxHiddenInput = ArkCheckbox.HiddenInput;
export type CheckboxHiddenInputProps = ComponentProps<
  typeof CheckboxHiddenInput
>;
export type CheckboxHiddenInputRef = ComponentRef<typeof CheckboxHiddenInput>;
