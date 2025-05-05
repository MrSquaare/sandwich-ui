import { ark } from "@ark-ui/react";
import { cx } from "@sandwich-ui/core/css";
import { button, ButtonVariant } from "@sandwich-ui/core/recipes";
import { ComponentRef, forwardRef } from "react";

import { ExtendedComponentProps } from "../utilities/react";

export type ButtonProps = ExtendedComponentProps<
  typeof ark.button,
  {
    size?: ButtonVariant["size"];
    variant?: ButtonVariant["variant"];
  }
>;
export type ButtonRef = ComponentRef<typeof ark.button>;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ size, variant, ...buttonProps }, ref) => {
    return (
      <ark.button
        {...buttonProps}
        className={cx(button({ size, variant }), buttonProps.className)}
        ref={ref}
      />
    );
  },
);

Button.displayName = "Button";
