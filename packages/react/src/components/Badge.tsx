import type { ComponentRef, ComponentType } from "react";

import { ark } from "@ark-ui/react";
import { badge } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const Badge = createRecipeComponent(badge, ark.div, "Badge");
export type BadgeProps = ComponentType<typeof Badge>;
export type BadgeRef = ComponentRef<typeof Badge>;
