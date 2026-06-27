import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@sandwich-ui/react";
import { badge } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    color: {
      control: "select",
      options: badge.variantMap.color,
    },
    size: {
      control: "select",
      options: badge.variantMap.size,
    },
    type: {
      control: "select",
      options: badge.variantMap.type,
    },
  },
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Badge",
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    color: "primary",
    size: "md",
    type: "filled",
  },
};
