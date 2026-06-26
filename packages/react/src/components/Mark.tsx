import type { ComponentProps, ComponentRef } from "react";

import { ark } from "@ark-ui/react";
import { mark } from "@sandwich-ui/styled-system/recipes";

import { createRecipeComponent } from "../utilities/panda";

export const Mark = createRecipeComponent(mark, ark.mark, "Mark");
export type MarkProps = ComponentProps<typeof Mark>;
export type MarkRef = ComponentRef<typeof Mark>;
