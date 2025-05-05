import * as ArkMenu from "@ark-ui/react/menu";
import { cva, cx } from "@sandwich-ui/core/css";
import { menuContent, menuItem } from "@sandwich-ui/core/recipes";
import { ComponentRef, FC, forwardRef } from "react";

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

export type MenuContentProps = ArkMenu.MenuContentProps;
export type MenuContentRef = ComponentRef<typeof ArkMenu.MenuContent>;

export const MenuContent = forwardRef<MenuContentRef, MenuContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkMenu.MenuPositioner>
        <ArkMenu.MenuContent
          {...props}
          className={cx(menuContent(), className)}
          ref={ref}
        >
          {children}
        </ArkMenu.MenuContent>
      </ArkMenu.MenuPositioner>
    );
  },
);

MenuContent.displayName = "MenuContent";

export type MenuItemProps = ArkMenu.MenuItemProps;
export type MenuItemRef = ComponentRef<typeof ArkMenu.MenuItem>;

export const MenuItem = forwardRef<MenuItemRef, MenuItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ArkMenu.MenuItem
        {...props}
        className={cx(menuItem(), className)}
        ref={ref}
      >
        {children}
      </ArkMenu.MenuItem>
    );
  },
);

MenuItem.displayName = "MenuItem";
