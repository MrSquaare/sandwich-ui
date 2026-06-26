import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SVGProps } from "react";

import {
  Checkbox,
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
} from "@sandwich-ui/react";
import { checkbox } from "@sandwich-ui/styled-system/recipes";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={"none"}
    stroke={"currentColor"}
    strokeWidth={4}
    viewBox={"0 0 24 24"}
    {...props}
  >
    <polyline points={"20 6 9 17 4 12"} />
  </svg>
);

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={"none"}
    stroke={"currentColor"}
    strokeWidth={4}
    viewBox={"0 0 24 24"}
    {...props}
  >
    <line x1={"5"} x2={"19"} y1={"12"} y2={"12"} />
  </svg>
);

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: checkbox.variantMap.size,
    },
  },
  component: Checkbox,
  tags: ["autodocs"],
  title: "Components/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Checkbox {...args}>
      <CheckboxControl>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel>Label</CheckboxLabel>
      <CheckboxHiddenInput />
    </Checkbox>
  ),
};

export const Indeterminate: Story = {
  args: {
    checked: "indeterminate",
    size: "md",
  },
  render: (args) => (
    <Checkbox {...args}>
      <CheckboxControl>
        <CheckboxIndicator indeterminate>
          <MinusIcon />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel>Label</CheckboxLabel>
      <CheckboxHiddenInput />
    </Checkbox>
  ),
};
