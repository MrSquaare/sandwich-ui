import type { SystemStyleObject } from "@pandacss/dev";

export const shadowHoverEffectHelper = {
  _hover: {
    boxShadow: "bold",
    transform: "translate(-2px, -2px)",
  },
  boxShadow: "medium",
  transform: "translate(0px, 0px)",
  transition: "box-shadow 0.1s, transform 0.1s",
} satisfies SystemStyleObject;

export const shadowActiveEffectHelper = {
  _active: {
    boxShadow: "none",
    transform: "translate(4px, 4px)",
  },
  transition: "box-shadow 0.1s, transform 0.1s",
} satisfies SystemStyleObject;
