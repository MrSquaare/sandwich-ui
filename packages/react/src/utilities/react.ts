import type { ComponentProps, ElementType } from "react";

export type ExtendedComponentProps<
  T extends ElementType,
  Props extends object = object,
> = Omit<ComponentProps<T>, keyof Props> & Props;

export const getComponentName = (component: ElementType) => {
  if (typeof component === "string") {
    return component;
  }

  return component.displayName || component.name || "Component";
};
