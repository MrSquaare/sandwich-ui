import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Navigation,
  NavigationItem,
  NavigationList,
} from "@sandwich-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ minWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Navigation {...args} style={{ justifyContent: "space-between" }}>
      <NavigationList>
        <NavigationItem>
          <Button>Home</Button>
        </NavigationItem>
        <NavigationItem>
          <Button>Blog</Button>
        </NavigationItem>
      </NavigationList>
      <NavigationList>
        <Menu>
          <MenuTrigger>
            <Avatar size={"sm"}>
              <AvatarFallback>FB</AvatarFallback>
              <AvatarImage src={"https://i.pravatar.cc/300"} />
            </Avatar>
          </MenuTrigger>
          <MenuContent>
            <MenuItem id={"item-1"}>Profile</MenuItem>
            <MenuItem id={"item-2"}>Sign out</MenuItem>
          </MenuContent>
        </Menu>
      </NavigationList>
    </Navigation>
  ),
};
