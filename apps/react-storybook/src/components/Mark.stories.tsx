import type { Meta, StoryObj } from "@storybook/react-vite";

import { Mark } from "@sandwich-ui/react";

const meta = {
  component: Mark,
  tags: ["autodocs"],
  title: "Components/Mark",
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "highlighted text",
  },
  render: (args) => (
    <p>
      This is an example of <Mark {...args} /> inside a sentence.
    </p>
  ),
};
