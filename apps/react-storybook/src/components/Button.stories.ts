import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@sandwich-ui/react";
import { button } from "@sandwich-ui/styled-system/recipes";
import { fn } from "storybook/test";

const meta = {
  args: {
    onClick: fn(),
  },
  argTypes: {
    color: {
      control: "select",
      options: button.variantMap.color,
    },
    size: {
      control: "select",
      options: button.variantMap.size,
    },
    variant: {
      control: "select",
      options: button.variantMap.variant,
    },
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "primary",
    size: "md",
    variant: "filled",
  },
};
