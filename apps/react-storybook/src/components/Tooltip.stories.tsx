import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@sandwich-ui/react";

const meta = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>Tooltip</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>Tooltip content</TooltipContent>
      </TooltipPositioner>
    </Tooltip>
  ),
};
