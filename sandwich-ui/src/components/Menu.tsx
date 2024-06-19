import * as ArkMenu from "@ark-ui/react/menu";
import { ComponentRef, FC, forwardRef } from "react";

import { cva, cx } from "../styled-system/css";

export type MenuProps = ArkMenu.MenuRootProps;
export type MenuRef = ComponentRef<typeof ArkMenu.MenuRoot>;

export const Menu: FC<MenuProps> = ArkMenu.MenuRoot;

Menu.displayName = "Menu";

export const MenuTriggerRecipe = cva({
  base: {
    cursor: "pointer",
  },
});

export type MenuTriggerProps = ArkMenu.MenuTriggerProps;
export type MenuTriggerRef = ComponentRef<typeof ArkMenu.MenuTrigger>;

export const MenuTrigger = forwardRef<MenuTriggerRef, MenuTriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkMenu.MenuTrigger
        {...props}
        className={cx(MenuTriggerRecipe(), className)}
        ref={ref}
      >
        {children}
      </ArkMenu.MenuTrigger>
    );
  },
);

MenuTrigger.displayName = "MenuTrigger";

export const MenuContentRecipe = cva({
  base: {
    bg: { base: "white", _dark: "black" },
    color: { base: "black", _dark: "white" },
    border: "1px solid",
    borderColor: { base: "neutral.200", _dark: "neutral.800" },
    borderRadius: "md",
    fontSize: "sm",
    minW: "8rem",
    p: 1,
    zIndex: 50,
    animation: "popoverIn 0.2s ease",
    "&[data-state='closed']": {
      animation: "popoverOut 0.2s ease",
    },
  },
});

export type MenuContentProps = ArkMenu.MenuContentProps;
export type MenuContentRef = ComponentRef<typeof ArkMenu.MenuContent>;

export const MenuContent = forwardRef<MenuContentRef, MenuContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkMenu.MenuPositioner>
        <ArkMenu.MenuContent
          {...props}
          className={cx(MenuContentRecipe(), className)}
          ref={ref}
        >
          {children}
        </ArkMenu.MenuContent>
      </ArkMenu.MenuPositioner>
    );
  },
);

MenuContent.displayName = "MenuContent";

export const MenuItemRecipe = cva({
  base: {
    color: { base: "black", _dark: "white" },
    fontSize: "sm",
    borderRadius: "md",
    px: 2,
    py: 1.5,
    cursor: "pointer",
    transition: "colors",
    _hover: {
      bg: { base: "neutral.100", _dark: "neutral.900" },
    },
  },
});

export type MenuItemProps = ArkMenu.MenuItemProps;
export type MenuItemRef = ComponentRef<typeof ArkMenu.MenuItem>;

export const MenuItem = forwardRef<MenuItemRef, MenuItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkMenu.MenuItem
        {...props}
        className={cx(MenuItemRecipe(), className)}
        ref={ref}
      >
        {children}
      </ArkMenu.MenuItem>
    );
  },
);

MenuItem.displayName = "MenuItem";
