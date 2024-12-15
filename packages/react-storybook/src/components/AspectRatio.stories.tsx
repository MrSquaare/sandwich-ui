import { AspectRatio } from "@sandwich-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: "number",
    },
  },
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
        src={"https://via.placeholder.com/1024"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </AspectRatio>
  ),
};
