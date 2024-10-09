import { Meta, StoryFn } from "@storybook/react";
import { Switch, FormControlLabel, FormHelperText } from "@mui/material";
import React from "react";
import withThemeProvider from "./withThemeProvider";

(Switch as React.ForwardRefExoticComponent<any>).displayName = "Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Switch is checked or not",
    },
    disabled: {
      control: "boolean",
      description: "Disable the switch",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary","warning"],
      description: "Color of the switch",
    },
    size: {
      control: "select",
      options: ["small", "medium","large"],
      description: "Size of the switch",
    },
    label: {
      control: "text",
      description: "Label for the switch",
    },
    labelPlacement: {
      control: "select",
      options: ["end", "start", "top", "bottom"],
      description: "Placement of the label relative to the switch",
    },
    error: {
      control: "boolean",
      description: "Indicates if there is an error",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display when error is true",
    },
    onChange: {
      action: "changed",
      description: "Handler for the switch state change",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = ({
  label,
  labelPlacement,
  error,
  errorMessage,
  ...args
}) => (
  <div>
    <FormControlLabel
      control={<Switch {...args} />}
      label={label}
      labelPlacement={labelPlacement}
    />
    {error && errorMessage && (
      <FormHelperText error>{errorMessage}</FormHelperText>
    )}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  color: "primary",
  size: "medium", // Default size
  label: "Switch Label", // Default label
  labelPlacement: "end", // Default label placement
  error: false, // Default error state
  errorMessage: "This is an error message", // Error message to display
};

// Example of an error state story
export const ErrorState = Template.bind({});
ErrorState.args = {
  checked: false,
  disabled: false,
  color: "error",
  size: "medium",
  label: "Switch Label",
  labelPlacement: "end",
  error: true, // Enable error state
  errorMessage: "Please toggle the switch.", // Error message to display
};
