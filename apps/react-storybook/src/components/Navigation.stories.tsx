import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Menu,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuTrigger,
  Navigation,
  NavigationBrand,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "@sandwich-ui/react";
import { css } from "@sandwich-ui/styled-system/css";

const meta = {
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Navigation",
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "800px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Navigation {...args}>
      <NavigationList position={"left"}>
        <NavigationBrand asChild>
          <a href={"#"}>My App</a>
        </NavigationBrand>
        <NavigationItem>
          <NavigationLink href={"#home"}>Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href={"#blog"}>Blog</NavigationLink>
        </NavigationItem>
      </NavigationList>
      <NavigationList position={"right"}>
        <Menu>
          <MenuTrigger
            aria-label={"Open user menu"}
            className={css({
              alignItems: "center",
              alignSelf: "stretch",
              display: "flex",
              px: 6,
            })}
          >
            <Avatar size={"sm"}>
              <AvatarFallback>FB</AvatarFallback>
              <AvatarImage src={"https://i.pravatar.cc/300"} />
            </Avatar>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value={"profile"}>Profile</MenuItem>
              <MenuItem value={"sign-out"}>Sign out</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </Menu>
      </NavigationList>
    </Navigation>
  ),
};

export const CenteredLinks: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "800px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Navigation {...args}>
      <NavigationList position={"left"}>
        <NavigationBrand asChild>
          <a href={"#"}>My App</a>
        </NavigationBrand>
      </NavigationList>
      <NavigationList position={"center"}>
        <NavigationItem>
          <NavigationLink href={"#home"}>Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href={"#blog"}>Blog</NavigationLink>
        </NavigationItem>
      </NavigationList>
      <NavigationList position={"right"}>
        <Menu>
          <MenuTrigger
            aria-label={"Open user menu"}
            className={css({
              alignItems: "center",
              alignSelf: "stretch",
              display: "flex",
              px: 6,
            })}
          >
            <Avatar size={"sm"}>
              <AvatarFallback>FB</AvatarFallback>
              <AvatarImage src={"https://i.pravatar.cc/300"} />
            </Avatar>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value={"profile"}>Profile</MenuItem>
              <MenuItem value={"sign-out"}>Sign out</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </Menu>
      </NavigationList>
    </Navigation>
  ),
};

export const Sticky: Story = {
  args: {
    sticky: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200px", overflow: "auto", width: "800px" }}>
        <div style={{ height: "400px" }}>
          <Story />
          <div style={{ padding: "20px" }}>Scroll down</div>
        </div>
      </div>
    ),
  ],
  render: (args) => (
    <Navigation {...args}>
      <NavigationList position={"left"}>
        <NavigationBrand asChild>
          <a href={"#"}>My App</a>
        </NavigationBrand>
        <NavigationItem>
          <NavigationLink href={"#home"}>Home</NavigationLink>
        </NavigationItem>
      </NavigationList>
      <NavigationList position={"right"}>
        <NavigationItem>
          <NavigationLink href={"#about"}>About</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  ),
};
