import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Switch,
  SwitchControl,
  SwitchHiddenInput,
  SwitchLabel,
  SwitchThumb,
} from "@sandwich-ui/react";
import { switchRecipe } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: switchRecipe.variantMap.size,
    },
  },
  component: Switch,
  tags: ["autodocs"],
  title: "Components/Switch",
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Switch {...args}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
      <SwitchHiddenInput />
    </Switch>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    size: "md",
  },
  render: (args) => (
    <Switch {...args}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
      <SwitchHiddenInput />
    </Switch>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: "md",
  },
  render: (args) => (
    <Switch {...args}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
      <SwitchHiddenInput />
    </Switch>
  ),
};
