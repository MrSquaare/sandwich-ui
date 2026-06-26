import type { ComponentProps, ComponentRef } from "react";

import { Field as ArkField } from "@ark-ui/react/field";
import { input } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const Input = createRecipeComponent(input, ArkField.Input, "Input");
export type InputProps = ComponentProps<typeof Input>;
export type InputRef = ComponentRef<typeof Input>;
