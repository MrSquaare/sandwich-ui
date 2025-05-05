import * as ArkTooltip from "@ark-ui/react/tooltip";
import { cx } from "@sandwich-ui/core/css";
import { tooltipContent } from "@sandwich-ui/core/recipes";
import { ComponentRef, FC, forwardRef } from "react";

export type TooltipProps = ArkTooltip.TooltipRootProps;
export type TooltipRef = ComponentRef<typeof ArkTooltip.TooltipRoot>;

export const Tooltip: FC<TooltipProps> = ArkTooltip.TooltipRoot;

Tooltip.displayName = "Tooltip";

export type TooltipTriggerProps = ArkTooltip.TooltipTriggerProps;
export type TooltipTriggerRef = ComponentRef<typeof ArkTooltip.TooltipTrigger>;

export const TooltipTrigger: FC<TooltipTriggerProps> =
  ArkTooltip.TooltipTrigger;

TooltipTrigger.displayName = "TooltipTrigger";

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
        className={cx(tooltipContent(), className)}
        ref={ref}
      >
        {children}
      </ArkTooltip.TooltipContent>
    </ArkTooltip.TooltipPositioner>
  );
});

TooltipContent.displayName = "TooltipContent";
