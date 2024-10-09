import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import React from "react";
import withThemeProvider from "./withThemeProvider";

(Checkbox as React.ForwardRefExoticComponent<any>).displayName = "Checkbox";
(FormControlLabel as React.ForwardRefExoticComponent<any>).displayName =
  "FormControlLabel";

export default {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Checkbox is checked or not",
    },
    indeterminate: {
      control: "boolean",
      description: "Indeterminate state of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Disable the checkbox",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      description: "Color of the checkbox",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "Size of the checkbox",
    },
    label: {
      control: "text",
      description: "Label text for the checkbox",
    },
    error: {
      control: "boolean",
      description: "Indicates if there is an error",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display when error is true",
    },
    icon: {
      control: "boolean",
      description: "Use custom unchecked icon",
    },
    checkedIcon: {
      control: "boolean",
      description: "Use custom checked icon",
    },
    onChange: {
      action: "changed",
      description: "Handler for checkbox state changes",
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({
  label,
  error,
  errorMessage,
  icon,
  checkedIcon,
  ...args
}) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          {...args}
          icon={icon ? <FavoriteBorder /> : undefined}
          checkedIcon={checkedIcon ? <Favorite /> : undefined}
          size={args.size}
        />
      }
      label={label}
    />
    {error && errorMessage && (
      <FormHelperText error>{errorMessage}</FormHelperText>
    )}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  indeterminate: false,
  disabled: false,
  color: "primary",
  size: "medium", // Default size
  label: "Check this box",
  error: false, // Default error state
  errorMessage: "This is an error message", // Error message to display when error is true
  icon: false, // Set to true to use custom unchecked icon
  checkedIcon: false, // Set to true to use custom checked icon
};

// Example of an error state story
export const ErrorState = Template.bind({});
ErrorState.args = {
  checked: false,
  indeterminate: false,
  disabled: false,
  color: "error",
  size: "medium",
  label: "Check this box",
  error: true, // Enable error state
  errorMessage: "Please select this checkbox.", // Error message to display
  icon: false,
  checkedIcon: false,
};
