import { ark } from "@ark-ui/react";
import { type ComponentRef, forwardRef } from "react";

import type { ExtendedComponentProps } from "../utilities/react";

export type AspectRatioProps = ExtendedComponentProps<
  typeof ark.div,
  {
    ratio: number;
  }
>;
export type AspectRatioRef = ComponentRef<typeof ark.div>;

export const AspectRatio = forwardRef<AspectRatioRef, AspectRatioProps>(
  ({ asChild, children, ratio, style, ...props }, ref) => {
    return (
      <ark.div
        {...props}
        ref={ref}
        style={{
          paddingBottom: `${100 / ratio}%`,
          position: "relative",
          width: "100%",
        }}
      >
        <ark.div
          asChild={asChild}
          style={{
            bottom: 0,
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
            ...style,
          }}
        >
          {children}
        </ark.div>
      </ark.div>
    );
  },
);

AspectRatio.displayName = "AspectRatio";
