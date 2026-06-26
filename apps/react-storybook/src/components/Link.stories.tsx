import type { Meta, StoryObj } from "@storybook/react-vite";

import { Link } from "@sandwich-ui/react";

const meta = {
  component: Link,
  tags: ["autodocs"],
  title: "Components/Link",
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Visit example.com",
    href: "https://example.com",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  render: (args) => <Link {...args} />,
};
