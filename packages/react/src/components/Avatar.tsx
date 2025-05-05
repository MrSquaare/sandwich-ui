import * as ArkAvatar from "@ark-ui/react/avatar";
import { cx } from "@sandwich-ui/core/css";
import { avatar, AvatarVariant } from "@sandwich-ui/core/recipes";
import { ComponentRef, FC, forwardRef } from "react";

export type AvatarProps = Omit<ArkAvatar.AvatarRootProps, "size"> & {
  size?: AvatarVariant["size"];
};
export type AvatarRef = ComponentRef<typeof ArkAvatar.AvatarRoot>;

export const Avatar = forwardRef<AvatarRef, AvatarProps>(
  ({ children, size, className, ...props }, ref) => {
    return (
      <ArkAvatar.AvatarRoot
        {...props}
        className={cx(avatar({ size }), className)}
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
