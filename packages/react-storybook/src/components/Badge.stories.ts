import { Badge, BadgeRecipe } from "@sandwich-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: BadgeRecipe.variantMap.size,
    },
    variant: {
      control: "select",
      options: BadgeRecipe.variantMap.variant,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "filled",
    children: "Badge",
  },
};
