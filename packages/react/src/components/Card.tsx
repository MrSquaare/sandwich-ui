import { ark } from "@ark-ui/react";
import { cx } from "@sandwich-ui/core/css";
import {
  CardBodyRecipe,
  CardDescriptionRecipe,
  CardFooterRecipe,
  CardHeaderRecipe,
  CardRecipe,
  CardTitleRecipe,
} from "@sandwich-ui/core/recipes";
import { ComponentRef, forwardRef } from "react";

import { ExtendedComponentProps } from "../utilities/react";

export type CardProps = ExtendedComponentProps<typeof ark.div>;
export type CardRef = ComponentRef<typeof ark.div>;

export const Card = forwardRef<CardRef, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <ark.div
        {...props}
        className={cx(CardRecipe(), props.className)}
        ref={ref}
      >
        {children}
      </ark.div>
    );
  },
);

Card.displayName = "Card";

export type CardHeaderProps = ExtendedComponentProps<typeof ark.div>;
export type CardHeaderRef = ComponentRef<typeof ark.div>;

export const CardHeader = forwardRef<CardHeaderRef, CardHeaderProps>(
  ({ children, ...cardHeaderProps }, ref) => {
    return (
      <ark.div
        {...cardHeaderProps}
        className={cx(CardHeaderRecipe(), cardHeaderProps.className)}
        ref={ref}
      >
        {children}
      </ark.div>
    );
  },
);

CardHeader.displayName = "CardHeader";

export type CardTitleProps = ExtendedComponentProps<typeof ark.h3>;
export type CardTitleRef = ComponentRef<typeof ark.h3>;

export const CardTitle = forwardRef<CardTitleRef, CardTitleProps>(
  ({ children, ...cardTitleProps }, ref) => {
    return (
      <ark.h3
        {...cardTitleProps}
        className={cx(CardTitleRecipe(), cardTitleProps.className)}
        ref={ref}
      >
        {children}
      </ark.h3>
    );
  },
);

CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = ExtendedComponentProps<typeof ark.p>;
export type CardDescriptionRef = ComponentRef<typeof ark.p>;

export const CardDescription = forwardRef<
  CardDescriptionRef,
  CardDescriptionProps
>(({ children, ...cardDescriptionProps }, ref) => {
  return (
    <ark.p
      {...cardDescriptionProps}
      className={cx(CardDescriptionRecipe(), cardDescriptionProps.className)}
      ref={ref}
    >
      {children}
    </ark.p>
  );
});

CardDescription.displayName = "CardDescription";

export type CardBodyProps = ExtendedComponentProps<typeof ark.div>;
export type CardBodyRef = ComponentRef<typeof ark.div>;

export const CardBody = forwardRef<CardBodyRef, CardBodyProps>(
  ({ children, ...cardBodyProps }, ref) => {
    return (
      <ark.div
        {...cardBodyProps}
        className={cx(CardBodyRecipe(), cardBodyProps.className)}
        ref={ref}
      >
        {children}
      </ark.div>
    );
  },
);

CardBody.displayName = "CardBody";

export type CardFooterProps = ExtendedComponentProps<typeof ark.div>;
export type CardFooterRef = ComponentRef<typeof ark.div>;

export const CardFooter = forwardRef<CardFooterRef, CardFooterProps>(
  ({ children, ...cardFooterProps }, ref) => {
    return (
      <ark.div
        {...cardFooterProps}
        className={cx(CardFooterRecipe(), cardFooterProps.className)}
        ref={ref}
      >
        {children}
      </ark.div>
    );
  },
);

CardFooter.displayName = "CardFooter";
