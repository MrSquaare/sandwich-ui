import type { ComponentProps, ComponentRef } from "react";

import * as ArkTooltip from "@ark-ui/react/tooltip";
import { tooltip } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const tooltipFactory = createSlotRecipeComponentFactory(tooltip);

export const Tooltip = tooltipFactory.createProviderComponent(
  ArkTooltip.TooltipRoot,
  "root",
  "Tooltip",
);
export type TooltipProps = ComponentProps<typeof Tooltip>;
export type TooltipRef = ComponentRef<typeof Tooltip>;

export const TooltipTrigger = tooltipFactory.createConsumerComponent(
  ArkTooltip.TooltipTrigger,
  "trigger",
  "TooltipTrigger",
);
export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>;
export type TooltipTriggerRef = ComponentRef<typeof TooltipTrigger>;

export const TooltipPositioner = tooltipFactory.createConsumerComponent(
  ArkTooltip.TooltipPositioner,
  "positioner",
  "TooltipPositioner",
);
export type TooltipPositionerProps = ComponentProps<typeof TooltipPositioner>;
export type TooltipPositionerRef = ComponentRef<typeof TooltipPositioner>;

export const TooltipContent = tooltipFactory.createConsumerComponent(
  ArkTooltip.TooltipContent,
  "content",
  "TooltipContent",
);
export type TooltipContentProps = ComponentProps<typeof TooltipContent>;
export type TooltipContentRef = ComponentRef<typeof TooltipContent>;
