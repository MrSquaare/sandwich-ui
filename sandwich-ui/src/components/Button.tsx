import { ark } from "@ark-ui/react";
import { ComponentRef, forwardRef } from "react";

import { RecipeVariant, cva, cx } from "../styled-system/css";
import { ExtendedComponentProps } from "../utilities/react";

export const ButtonRecipe = cva({
  base: {
    display: "inline-flex",
    border: "1px solid transparent",
    borderRadius: "md",
    cursor: "pointer",
    transition: "colors",
  },
  variants: {
    size: {
      sm: {
        fontSize: "xs",
        px: 2,
        py: 1,
      },
      md: {
        fontSize: "base",
        px: 4,
        py: 2,
      },
      lg: {
        fontSize: "lg",
        px: 6,
        py: 3,
      },
    },
    variant: {
      filled: {
        bg: { base: "black", _dark: "white" },
        color: { base: "white", _dark: "black" },
        _hover: {
          bg: { base: "neutral.800", _dark: "neutral.200" },
        },
      },
      outlined: {
        bg: { base: "white", _dark: "black" },
        color: { base: "black", _dark: "white" },
        borderColor: { base: "neutral.200", _dark: "neutral.800" },
        _hover: {
          bg: { base: "neutral.100", _dark: "neutral.900" },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

type Variants = RecipeVariant<typeof ButtonRecipe>;

export type ButtonSize = Variants["size"];
export type ButtonVariant = Variants["variant"];
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
