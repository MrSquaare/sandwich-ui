import { ark } from "@ark-ui/react";
import { ComponentRef, forwardRef } from "react";

import { cva, cx } from "../styled-system/css";
import { ExtendedComponentProps } from "../utilities/react";

export const NavigationRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    maxW: "full",
    zIndex: 10,
  },
});

export type NavigationProps = ExtendedComponentProps<typeof ark.nav>;
export type NavigationRef = ComponentRef<typeof ark.nav>;

export const Navigation = forwardRef<NavigationRef, NavigationProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ark.nav
        {...props}
        className={cx(NavigationRecipe(), className)}
        ref={ref}
      >
        {children}
      </ark.nav>
    );
  },
);

Navigation.displayName = "Navigation";

export const NavigationListRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    spaceX: 1,
    listStyleType: "none",
  },
});

export type NavigationListProps = ExtendedComponentProps<typeof ark.ul>;
export type NavigationListRef = ComponentRef<typeof ark.ul>;

export const NavigationList = forwardRef<
  NavigationListRef,
  NavigationListProps
>(({ children, className, ...props }, ref) => {
  return (
    <ark.ul
      {...props}
      className={cx(NavigationListRecipe(), className)}
      ref={ref}
    >
      {children}
    </ark.ul>
  );
});

NavigationList.displayName = "NavigationList";

export type NavigationItemProps = ExtendedComponentProps<typeof ark.li>;
export type NavigationItemRef = ComponentRef<typeof ark.li>;

export const NavigationItem = forwardRef<
  NavigationItemRef,
  NavigationItemProps
>(({ children, ...props }, ref) => {
  return (
    <ark.li {...props} ref={ref}>
      {children}
    </ark.li>
  );
});

NavigationItem.displayName = "NavigationItem";
