import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Card,
  CardDescription,
  CardSection,
  CardSeparator,
  CardTitle,
} from "@sandwich-ui/react";

const meta = {
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Card",
} satisfies Meta<typeof Card>;

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
    <Card {...args}>
      <CardSection>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardSection>
      <CardSection>Body</CardSection>
      <CardSection>Footer</CardSection>
    </Card>
  ),
};

export const WithSeparator: Story = {
  decorators: [
    (Story) => (
      <div style={{ minWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Card {...args}>
      <CardSection>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardSection>
      <CardSeparator />
      <CardSection>Body</CardSection>
      <CardSeparator />
      <CardSection>Footer</CardSection>
    </Card>
  ),
};
