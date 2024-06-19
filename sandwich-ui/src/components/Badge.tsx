import { ark } from "@ark-ui/react";
import { ComponentRef, forwardRef } from "react";

import { RecipeVariant, cva, cx } from "../styled-system/css";
import { ExtendedComponentProps } from "../utilities/react";

export const BadgeRecipe = cva({
  base: {
    display: "inline-flex",
    border: "1px solid transparent",
    borderRadius: "full",
  },
  variants: {
    size: {
      sm: {
        fontSize: "xs",
        px: 1,
        py: 0.25,
      },
      md: {
        fontSize: "base",
        px: 2,
        py: 0.5,
      },
      lg: {
        fontSize: "lg",
        px: 3,
        py: 1,
      },
    },
    variant: {
      filled: {
        bg: { base: "black", _dark: "white" },
        color: { base: "white", _dark: "black" },
      },
      outlined: {
        bg: { base: "white", _dark: "black" },
        color: { base: "black", _dark: "white" },
        borderColor: { base: "neutral.200", _dark: "neutral.800" },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

type Variants = RecipeVariant<typeof BadgeRecipe>;

export type BadgeVariant = Variants["variant"];
export type BadgeSize = Variants["size"];
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
