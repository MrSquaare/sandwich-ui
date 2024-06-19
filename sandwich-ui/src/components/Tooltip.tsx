import * as ArkTooltip from "@ark-ui/react/tooltip";
import { ComponentRef, FC, forwardRef } from "react";

import { cva, cx } from "../styled-system/css";

export type TooltipProps = ArkTooltip.TooltipRootProps;
export type TooltipRef = ComponentRef<typeof ArkTooltip.TooltipRoot>;

export const Tooltip: FC<TooltipProps> = ArkTooltip.TooltipRoot;

Tooltip.displayName = "Tooltip";

export type TooltipTriggerProps = ArkTooltip.TooltipTriggerProps;
export type TooltipTriggerRef = ComponentRef<typeof ArkTooltip.TooltipTrigger>;

export const TooltipTrigger: FC<TooltipTriggerProps> =
  ArkTooltip.TooltipTrigger;

TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContentRecipe = cva({
  base: {
    bg: { base: "white", _dark: "black" },
    color: { base: "black", _dark: "white" },
    border: "1px solid",
    borderColor: { base: "neutral.200", _dark: "neutral.800" },
    borderRadius: "md",
    fontSize: "sm",
    px: 3,
    py: 1.5,
    zIndex: 50,
    animation: "popoverIn 0.2s ease",
    "&[data-state='closed']": {
      animation: "popoverOut 0.2s ease",
    },
  },
});

export type TooltipContentProps = ArkTooltip.TooltipContentProps;
export type TooltipContentRef = ComponentRef<typeof ArkTooltip.TooltipContent>;

export const TooltipContent = forwardRef<
  TooltipContentRef,
  TooltipContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <ArkTooltip.TooltipPositioner>
      <ArkTooltip.TooltipContent
        {...props}
        className={cx(TooltipContentRecipe(), className)}
        ref={ref}
      >
        {children}
      </ArkTooltip.TooltipContent>
    </ArkTooltip.TooltipPositioner>
  );
});

TooltipContent.displayName = "TooltipContent";
