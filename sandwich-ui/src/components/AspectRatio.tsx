import { ark } from "@ark-ui/react";
import { ComponentRef, forwardRef } from "react";

import { ExtendedComponentProps } from "../utilities/react";

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
          position: "relative",
          width: "100%",
          paddingBottom: `${100 / ratio}%`,
        }}
      >
        <ark.div
          asChild={asChild}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
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
