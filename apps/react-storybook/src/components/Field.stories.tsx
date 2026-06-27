import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Field,
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  Input,
  NativeSelect,
  Textarea,
} from "@sandwich-ui/react";

const meta = {
  component: Field,
  tags: ["autodocs"],
  title: "Components/Field",
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel>Label</FieldLabel>
      <Input placeholder={"Placeholder"} />
      <FieldHelperText>Helper text</FieldHelperText>
      <FieldErrorText>Error text</FieldErrorText>
    </Field>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Field invalid>
      <FieldLabel>Label</FieldLabel>
      <Input defaultValue={"Invalid value"} placeholder={"Placeholder"} />
      <FieldHelperText>Helper text</FieldHelperText>
      <FieldErrorText>Error text</FieldErrorText>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field disabled>
      <FieldLabel>Label</FieldLabel>
      <Input placeholder={"Placeholder"} />
      <FieldHelperText>Helper text</FieldHelperText>
    </Field>
  ),
};

export const TextareaStory: Story = {
  name: "Textarea",
  render: () => (
    <Field>
      <FieldLabel>Label</FieldLabel>
      <Textarea placeholder={"Placeholder"} />
      <FieldHelperText>Helper text</FieldHelperText>
    </Field>
  ),
};

export const SelectStory: Story = {
  name: "Select",
  render: () => (
    <Field>
      <FieldLabel>Label</FieldLabel>
      <NativeSelect defaultValue={""}>
        <option disabled value={""}>
          Placeholder
        </option>
        <option value={"1"}>Option 1</option>
        <option value={"2"}>Option 2</option>
        <option value={"3"}>Option 3</option>
        <option value={"4"}>Option 4</option>
      </NativeSelect>
      <FieldHelperText>Helper text</FieldHelperText>
    </Field>
  ),
};
