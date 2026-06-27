import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@sandwich-ui/react";
import { input } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: input.variantMap.size,
    },
  },
  component: Input,
  tags: ["autodocs"],
  title: "Components/Input",
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    size: "md",
  },
};
