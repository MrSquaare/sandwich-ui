import { Tooltip } from "@sandwich-ui/web";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta = {
  title: "Components/Tooltip",
  component: "sw-tooltip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<Tooltip>;

export default meta;

type Story = StoryObj<Tooltip>;

export const Default: Story = {
  render: () => `
    <sw-tooltip id="myTooltip">
      <sw-tooltip-trigger>
        Tooltip
      </sw-tooltip-trigger>
      <sw-tooltip-positioner>
        <sw-tooltip-content>
          Tooltip content
        </sw-tooltip-content>
      </sw-tooltip-positioner>
    </sw-tooltip>
  `,
};
