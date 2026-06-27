import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Card,
  CardDescription,
  CardSection,
  CardSeparator,
  CardTitle,
  Checkbox,
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  Field,
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  Input,
  NativeSelect,
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupItemText,
  RadioGroupLabel,
  Switch,
  SwitchControl,
  SwitchHiddenInput,
  SwitchLabel,
  SwitchThumb,
  Textarea,
} from "@sandwich-ui/react";
import { css } from "@sandwich-ui/styled-system/css";

const meta = {
  parameters: {
    layout: "centered",
  },
  title: "Examples/Form",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const CheckIcon = () => (
  <svg
    className={css({
      h: "4",
      stroke: "currentColor",
      strokeWidth: "3",
      w: "4",
    })}
    fill={"none"}
    viewBox={"0 0 24 24"}
  >
    <polyline points={"20 6 9 17 4 12"} />
  </svg>
);

export const Default: Story = {
  render: () => (
    <div>
      <Card>
        <CardSection>
          <CardTitle>Create New Server</CardTitle>
          <CardDescription>
            Configure your virtual machine instance settings
          </CardDescription>
        </CardSection>

        <CardSeparator />

        <CardSection
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "4",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "2",
            })}
          >
            <h3>Basic Details</h3>

            <div
              className={css({
                display: "grid",
                gap: "4",
                gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
              })}
            >
              <Field invalid>
                <FieldLabel>Server Name</FieldLabel>
                <Input defaultValue={"acme-web-01"} />
                <FieldErrorText>
                  Server name is already taken in this region.
                </FieldErrorText>
              </Field>

              <Field>
                <FieldLabel>Deploy Region</FieldLabel>
                <NativeSelect defaultValue={"us-east"}>
                  <option value={"us-east"}>N. Virginia (US East)</option>
                  <option value={"us-west"}>Oregon (US West)</option>
                  <option value={"eu-west"}>Frankfurt (Europe West)</option>
                  <option value={"ap-south"}>Mumbai (Asia Pacific)</option>
                </NativeSelect>
              </Field>
            </div>
          </div>

          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "2",
            })}
          >
            <h3>Instance Options</h3>

            <RadioGroup
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "3",
              })}
              defaultValue={"standard"}
            >
              <RadioGroupLabel>Billing & Performance Tier</RadioGroupLabel>
              <RadioGroupItem value={"developer"}>
                <RadioGroupItemControl />
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  <RadioGroupItemText>Developer Tier</RadioGroupItemText>
                  <span
                    className={css({ color: "text.muted", fontSize: "xs" })}
                  >
                    1 vCPU, 1GB RAM, 25GB SSD storage. $5/month.
                  </span>
                </div>
                <RadioGroupItemHiddenInput />
              </RadioGroupItem>

              <RadioGroupItem value={"standard"}>
                <RadioGroupItemControl />
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  <RadioGroupItemText>Standard Tier</RadioGroupItemText>
                  <span
                    className={css({ color: "text.muted", fontSize: "xs" })}
                  >
                    2 vCPU, 4GB RAM, 80GB SSD storage. $20/month.
                  </span>
                </div>
                <RadioGroupItemHiddenInput />
              </RadioGroupItem>
            </RadioGroup>

            <Field>
              <FieldLabel>Initialization Script (Optional)</FieldLabel>
              <Textarea
                placeholder={"#!/bin/bash\n# Enter shell commands here..."}
              />
              <FieldHelperText>
                This script runs automatically when the instance boots up.
              </FieldHelperText>
            </Field>
          </div>

          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "2",
            })}
          >
            <h3>Management & Access</h3>

            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "2",
              })}
            >
              <Field>
                <Switch defaultChecked>
                  <SwitchControl>
                    <SwitchThumb />
                  </SwitchControl>
                  <SwitchLabel>Enable automatic weekly backups</SwitchLabel>
                  <SwitchHiddenInput />
                </Switch>
                <FieldHelperText>
                  Automated storage snapshots are retained for 30 days.
                </FieldHelperText>
              </Field>

              <Field>
                <Switch>
                  <SwitchControl>
                    <SwitchThumb />
                  </SwitchControl>
                  <SwitchLabel>Include detailed system logging</SwitchLabel>
                  <SwitchHiddenInput />
                </Switch>
                <FieldHelperText>
                  Sends hardware resource logs directly to your dashboard.
                </FieldHelperText>
              </Field>
            </div>
          </div>
        </CardSection>

        <CardSeparator />

        <CardSection>
          <Field>
            <Checkbox defaultChecked>
              <CheckboxControl>
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </CheckboxControl>
              <CheckboxLabel>
                I agree to the Server SLA and terms of service
              </CheckboxLabel>
              <CheckboxHiddenInput />
            </Checkbox>
          </Field>
        </CardSection>

        <CardSeparator />

        <CardSection
          className={css({
            display: "flex",
            gap: "3",
            justifyContent: "flex-end",
          })}
        >
          <Button color={"secondary"} variant={"outlined"}>
            Cancel
          </Button>
          <Button color={"primary"}>Create</Button>
        </CardSection>
      </Card>
    </div>
  ),
};
