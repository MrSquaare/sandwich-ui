import type { ComponentProps, ComponentRef } from "react";

import { Field as ArkField } from "@ark-ui/react/field";
import { textarea } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const Textarea = createRecipeComponent(
  textarea,
  ArkField.Textarea,
  "Textarea",
);
export type TextareaProps = ComponentProps<typeof Textarea>;
export type TextareaRef = ComponentRef<typeof Textarea>;
