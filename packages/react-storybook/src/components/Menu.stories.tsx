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
        <MenuItem id={"item-1"} onClick={fn()}>
          Item 1
        </MenuItem>
        <MenuItem id={"item-2"} onClick={fn()}>
          Item 2
        </MenuItem>
        <MenuItem id={"item-3"} onClick={fn()}>
          Item 3
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};
