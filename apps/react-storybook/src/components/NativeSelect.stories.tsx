import type { Meta, StoryObj } from "@storybook/react-vite";

import { NativeSelect } from "@sandwich-ui/react";
import { select } from "@sandwich-ui/styled-system/recipes";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: select.variantMap.size,
    },
  },
  component: NativeSelect,
  tags: ["autodocs"],
  title: "Components/NativeSelect",
} satisfies Meta<typeof NativeSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "",
    size: "md",
  },
  render: (args) => (
    <NativeSelect {...args}>
      <option disabled value={""}>
        Placeholder
      </option>
      <option value={"1"}>Option 1</option>
      <option value={"2"}>Option 2</option>
      <option value={"3"}>Option 3</option>
    </NativeSelect>
  ),
};
