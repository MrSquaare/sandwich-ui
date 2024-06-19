import { ComponentProps, ElementType } from "react";

export type ExtendedComponentProps<
  T extends ElementType,
  Props extends object = object,
> = Omit<ComponentProps<T>, keyof Props> & Props;
