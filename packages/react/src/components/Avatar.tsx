import type { ComponentProps, ComponentRef } from "react";

import * as ArkAvatar from "@ark-ui/react/avatar";
import { avatar } from "@sandwich-ui/styled-system/recipes";

import { createSlotRecipeComponentFactory } from "../utilities/panda";

const avatarFactory = createSlotRecipeComponentFactory(avatar);

export const Avatar = avatarFactory.createProviderComponent(
  ArkAvatar.AvatarRoot,
  "root",
  "Avatar",
);
export type AvatarProps = ComponentProps<typeof Avatar>;
export type AvatarRef = ComponentRef<typeof Avatar>;

export const AvatarImage = ArkAvatar.AvatarImage;
export type AvatarImageProps = ComponentProps<typeof AvatarImage>;
export type AvatarImageRef = ComponentRef<typeof AvatarImage>;

AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = avatarFactory.createConsumerComponent(
  ArkAvatar.AvatarFallback,
  "fallback",
  "AvatarFallback",
);
export type AvatarFallbackProps = ComponentProps<typeof AvatarFallback>;
export type AvatarFallbackRef = ComponentRef<typeof AvatarFallback>;
