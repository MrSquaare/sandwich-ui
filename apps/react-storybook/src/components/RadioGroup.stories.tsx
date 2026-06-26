import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupItemText,
  RadioGroupLabel,
} from "@sandwich-ui/react";
import { radioGroup } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: radioGroup.variantMap.size,
    },
  },
  component: RadioGroup,
  tags: ["autodocs"],
  title: "Components/RadioGroup",
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupLabel>Label</RadioGroupLabel>
      <RadioGroupItem value={"item-1"}>
        <RadioGroupItemControl />
        <RadioGroupItemText>Item 1</RadioGroupItemText>
        <RadioGroupItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value={"item-2"}>
        <RadioGroupItemControl />
        <RadioGroupItemText>Item 2</RadioGroupItemText>
        <RadioGroupItemHiddenInput />
      </RadioGroupItem>
      <RadioGroupItem value={"item-3"}>
        <RadioGroupItemControl />
        <RadioGroupItemText>Item 3</RadioGroupItemText>
        <RadioGroupItemHiddenInput />
      </RadioGroupItem>
    </RadioGroup>
  ),
};
