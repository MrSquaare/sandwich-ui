import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
} from "@sandwich-ui/react";
import { fn } from "storybook/test";

const meta = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Menu",
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>
      <MenuPositioner>
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
      </MenuPositioner>
    </Menu>
  ),
};

export const WithSeparator: Story = {
  render: (args) => (
    <Menu {...args}>
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          <MenuItem onClick={fn()} value={"item-1"}>
            Item 1
          </MenuItem>
          <MenuSeparator />
          <MenuItem onClick={fn()} value={"item-2"}>
            Item 2
          </MenuItem>
          <MenuSeparator />
          <MenuItem onClick={fn()} value={"item-3"}>
            Item 3
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </Menu>
  ),
};
