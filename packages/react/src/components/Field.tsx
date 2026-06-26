import type { ComponentProps, ComponentRef } from "react";

import { Field as ArkField } from "@ark-ui/react/field";
import { field } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const fieldFactory = createSlotRecipeComponentFactory(field);

export const Field = fieldFactory.createProviderComponent(
  ArkField.Root,
  "root",
  "Field",
);
export type FieldProps = ComponentProps<typeof Field>;
export type FieldRef = ComponentRef<typeof Field>;

export const FieldLabel = fieldFactory.createConsumerComponent(
  ArkField.Label,
  "label",
  "FieldLabel",
);
export type FieldLabelProps = ComponentProps<typeof FieldLabel>;
export type FieldLabelRef = ComponentRef<typeof FieldLabel>;

export const FieldHelperText = fieldFactory.createConsumerComponent(
  ArkField.HelperText,
  "helperText",
  "FieldHelperText",
);
export type FieldHelperTextProps = ComponentProps<typeof FieldHelperText>;
export type FieldHelperTextRef = ComponentRef<typeof FieldHelperText>;

export const FieldErrorText = fieldFactory.createConsumerComponent(
  ArkField.ErrorText,
  "errorText",
  "FieldErrorText",
);
export type FieldErrorTextProps = ComponentProps<typeof FieldErrorText>;
export type FieldErrorTextRef = ComponentRef<typeof FieldErrorText>;
