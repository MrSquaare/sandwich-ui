import type { ComponentProps, ComponentRef } from "react";

import { ark } from "@ark-ui/react";
import { button } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const Button = createRecipeComponent(button, ark.button, "Button");
export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonRef = ComponentRef<typeof Button>;
