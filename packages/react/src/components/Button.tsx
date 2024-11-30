import { ark } from "@ark-ui/react";
import { cx } from "@sandwich-ui/core/css";
import {
  ButtonRecipe,
  ButtonSize,
  ButtonVariant,
} from "@sandwich-ui/core/recipes";
import { ComponentRef, forwardRef } from "react";

import { ExtendedComponentProps } from "../utilities/react";

export type ButtonProps = ExtendedComponentProps<
  typeof ark.button,
  {
    size?: ButtonSize;
    variant?: ButtonVariant;
  }
>;
export type ButtonRef = ComponentRef<typeof ark.button>;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ size, variant, ...buttonProps }, ref) => {
    return (
      <ark.button
        {...buttonProps}
        className={cx(ButtonRecipe({ size, variant }), buttonProps.className)}
        ref={ref}
      />
    );
  },
);

Button.displayName = "Button";
