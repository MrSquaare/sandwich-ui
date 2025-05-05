import { ark } from "@ark-ui/react";
import { cx } from "@sandwich-ui/core/css";
import { badge, BadgeVariant } from "@sandwich-ui/core/recipes";
import { ComponentRef, forwardRef } from "react";

import { ExtendedComponentProps } from "../utilities/react";

export type BadgeProps = ExtendedComponentProps<
  typeof ark.div,
  {
    size?: BadgeVariant["size"];
    variant?: BadgeVariant["variant"];
  }
>;
export type BadgeRef = ComponentRef<typeof ark.div>;

export const Badge = forwardRef<BadgeRef, BadgeProps>(
  ({ children, size, variant, ...props }, ref) => {
    return (
      <ark.div
        {...props}
        className={cx(badge({ size, variant }), props.className)}
        ref={ref}
      >
        {children}
      </ark.div>
    );
  },
);

Badge.displayName = "Badge";
