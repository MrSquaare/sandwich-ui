import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@sandwich-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onClick={fn()} value={"item-1"}>
          Item 1
        </MenuItem>
        <MenuItem onClick={fn()} value={"item-2"}>
          Item 2
        </MenuItem>
        <MenuItem onClick={fn()} value={"item-3"}>
          Item 3
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};
