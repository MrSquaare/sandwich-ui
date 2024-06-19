import { Button, ButtonRecipe } from "@mrsquaare/sandwich-ui";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ButtonRecipe.variantMap.size,
    },
    variant: {
      control: "select",
      options: ButtonRecipe.variantMap.variant,
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "filled",
    children: "Button",
  },
};
