import * as ArkAvatar from "@ark-ui/react/avatar";
import { ComponentRef, FC, forwardRef } from "react";

import { RecipeVariant, cva, cx } from "../styled-system/css";

export const AvatarRecipe = cva({
  base: {
    borderRadius: "full",
    overflow: "hidden",
  },
  variants: {
    size: {
      sm: {
        w: "10",
        h: "10",
      },
      md: {
        w: "16",
        h: "16",
      },
      lg: {
        w: "24",
        h: "24",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Variants = RecipeVariant<typeof AvatarRecipe>;

export type AvatarSize = Variants["size"];
export type AvatarProps = Omit<ArkAvatar.AvatarRootProps, "size"> & {
  size?: AvatarSize;
};
export type AvatarRef = ComponentRef<typeof ArkAvatar.AvatarRoot>;

export const Avatar = forwardRef<AvatarRef, AvatarProps>(
  ({ children, size, className, ...props }, ref) => {
    return (
      <ArkAvatar.AvatarRoot
        {...props}
        className={cx(AvatarRecipe({ size }), className)}
        ref={ref}
      >
        {children}
      </ArkAvatar.AvatarRoot>
    );
  },
);

Avatar.displayName = "Avatar";

export type AvatarImageProps = ArkAvatar.AvatarImageProps;
export type AvatarImageRef = ComponentRef<typeof ArkAvatar.AvatarImage>;

export const AvatarImage: FC<AvatarImageProps> = ArkAvatar.AvatarImage;

AvatarImage.displayName = "AvatarImage";

export type AvatarFallbackProps = ArkAvatar.AvatarFallbackProps;
export type AvatarFallbackRef = ComponentRef<typeof ArkAvatar.AvatarFallback>;

export const AvatarFallback: FC<AvatarFallbackProps> = ArkAvatar.AvatarFallback;

AvatarFallback.displayName = "AvatarFallback";
