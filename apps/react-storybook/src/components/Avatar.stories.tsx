import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar, AvatarFallback, AvatarImage } from "@sandwich-ui/react";
import { avatar } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: avatar.variantMap.size,
    },
  },
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Avatar",
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>FB</AvatarFallback>
      <AvatarImage src={"https://i.pravatar.cc/300"} />
    </Avatar>
  ),
};

export const Fallback: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>FB</AvatarFallback>
      <AvatarImage src={"https://404.mrsquaare.fr"} />
    </Avatar>
  ),
};
