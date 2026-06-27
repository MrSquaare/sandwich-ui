import type { ComponentProps, ComponentRef } from "react";

import { Field as ArkField } from "@ark-ui/react/field";
import { select } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const NativeSelect = createRecipeComponent(
  select,
  ArkField.Select,
  "NativeSelect",
);
export type NativeSelectProps = ComponentProps<typeof NativeSelect>;
export type NativeSelectRef = ComponentRef<typeof NativeSelect>;
