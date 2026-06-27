import type { Meta, StoryObj } from "@storybook/react-vite";

import { AspectRatio } from "@sandwich-ui/react";

const meta = {
  argTypes: {
    ratio: {
      control: "number",
    },
  },
  component: AspectRatio,
  tags: ["autodocs"],
  title: "Components/AspectRatio",
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <AspectRatio {...args}>
      <img
        alt={"Placeholder"}
        src={"https://picsum.photos/1024"}
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
        }}
      />
    </AspectRatio>
  ),
};
