import { AvatarRecipe } from "@sandwich-ui/core/recipes";
import { Avatar, AvatarFallback, AvatarImage } from "@sandwich-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: AvatarRecipe.variantMap.size,
    },
  },
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
