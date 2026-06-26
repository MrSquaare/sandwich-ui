import type { ComponentProps, ComponentRef } from "react";

import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import { switchRecipe } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const switchFactory = createSlotRecipeComponentFactory(switchRecipe);

export const Switch = switchFactory.createProviderComponent(
  ArkSwitch.Root,
  "root",
  "Switch",
);
export type SwitchProps = ComponentProps<typeof Switch>;
export type SwitchRef = ComponentRef<typeof Switch>;

export const SwitchLabel = switchFactory.createConsumerComponent(
  ArkSwitch.Label,
  "label",
  "SwitchLabel",
);
export type SwitchLabelProps = ComponentProps<typeof SwitchLabel>;
export type SwitchLabelRef = ComponentRef<typeof SwitchLabel>;

export const SwitchControl = switchFactory.createConsumerComponent(
  ArkSwitch.Control,
  "control",
  "SwitchControl",
);
export type SwitchControlProps = ComponentProps<typeof SwitchControl>;
export type SwitchControlRef = ComponentRef<typeof SwitchControl>;

export const SwitchThumb = switchFactory.createConsumerComponent(
  ArkSwitch.Thumb,
  "thumb",
  "SwitchThumb",
);
export type SwitchThumbProps = ComponentProps<typeof SwitchThumb>;
export type SwitchThumbRef = ComponentRef<typeof SwitchThumb>;

export const SwitchHiddenInput = ArkSwitch.HiddenInput;
export type SwitchHiddenInputProps = ComponentProps<typeof SwitchHiddenInput>;
export type SwitchHiddenInputRef = ComponentRef<typeof SwitchHiddenInput>;
