import { ark } from "@ark-ui/react";
import { cx } from "@sandwich-ui/core/css";
import {
  BadgeRecipe,
  BadgeSize,
  BadgeVariant,
} from "@sandwich-ui/core/recipes";
import { ComponentRef, forwardRef } from "react";

import { ExtendedComponentProps } from "../utilities/react";

export type BadgeProps = ExtendedComponentProps<
  typeof ark.div,
  {
    size?: BadgeSize;
    variant?: BadgeVariant;
  }
>;
export type BadgeRef = ComponentRef<typeof ark.div>;

export const Badge = forwardRef<BadgeRef, BadgeProps>(
  ({ children, size, variant, ...props }, ref) => {
    return (
      <ark.div
        {...props}
        className={cx(BadgeRecipe({ size, variant }), props.className)}
        ref={ref}
      >
        {children}
      </ark.div>
    );
  },
);

Badge.displayName = "Badge";
