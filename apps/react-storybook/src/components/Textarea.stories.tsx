import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "@sandwich-ui/react";
import { textarea } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: textarea.variantMap.size,
    },
  },
  component: Textarea,
  tags: ["autodocs"],
  title: "Components/Textarea",
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    size: "md",
  },
};
