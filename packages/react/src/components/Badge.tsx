import type { ComponentProps, ComponentRef } from "react";

import { ark } from "@ark-ui/react";
import { badge } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const Badge = createRecipeComponent(badge, ark.div, "Badge");
export type BadgeProps = ComponentProps<typeof Badge>;
export type BadgeRef = ComponentRef<typeof Badge>;
