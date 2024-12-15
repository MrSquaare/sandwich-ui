import { HelloWorld } from "@sandwich-ui/web";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta = {
  title: "Components/HelloWorld",
  component: "sw-hello-world",
  tags: ["autodocs"],
} satisfies Meta<HelloWorld>;

export default meta;

type Story = StoryObj<HelloWorld>;

export const Default: Story = {};
