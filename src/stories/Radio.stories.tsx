import { Meta, StoryFn } from "@storybook/react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import React from "react";
import withThemeProvider from "./withThemeProvider";

// Setting display names for debugging
(Radio as React.ForwardRefExoticComponent<any>).displayName = "Radio";
(FormControlLabel as React.ForwardRefExoticComponent<any>).displayName =
  "FormControlLabel";
(FormControl as React.ForwardRefExoticComponent<any>).displayName =
  "FormControl";
(FormLabel as React.ForwardRefExoticComponent<any>).displayName = "FormLabel";
(FormHelperText as React.ForwardRefExoticComponent<any>).displayName =
  "FormHelperText";
(RadioGroup as React.ForwardRefExoticComponent<any>).displayName = "RadioGroup";

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Indicates whether the radio button is checked",
    },
    disabled: {
      control: "boolean",
      description: "Disables the radio button",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
      ],
      description: "Color of the radio button",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "Size of the radio button",
    },
    label: {
      control: "text",
      description: "Label for the radio button",
    },
    name: {
      control: "text",
      description: "Name for the radio button group",
    },
    value: {
      control: "text",
      description: "Value of the radio button",
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
      description: "Handler for radio button state change",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Radio>;

const RadioTemplate: StoryFn<typeof Radio> = ({
  label,
  error,
  errorMessage,
  ...args
}) => (
  <div>
    <FormControlLabel control={<Radio {...args} />} label={label} />
    {error && errorMessage && (
      <FormHelperText error>{errorMessage}</FormHelperText>
    )}
  </div>
);

export const Default = RadioTemplate.bind({});
Default.args = {
  checked: false,
  disabled: false,
  color: "primary",
  size: "medium",
  label: "Radio Option 1",
  name: "radioGroup",
  value: "option1",
  error: false,
  errorMessage: "This is an error message", // Optional error message
};

// Error state story
export const ErrorState = RadioTemplate.bind({});
ErrorState.args = {
  checked: false,
  disabled: false,
  color: "secondary",
  size: "medium",
  label: "Radio Option 2",
  name: "radioGroup",
  value: "option2",
  error: true,
  errorMessage: "Please select an option.",
};

export const Disabled = RadioTemplate.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  color: "primary",
  size: "medium",
  label: "Disabled Radio Option",
  name: "radioGroup",
  value: "option3",
};

// RadioGroup template with multiple options
const RadioGroupTemplate: StoryFn<typeof RadioGroup> = ({
  label,
  error,
  errorMessage,
  ...args
}) => (
  <FormControl error={error}>
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup {...args}>
      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
    </RadioGroup>
    {error && errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
  </FormControl>
);

export const RadioGroupExample = RadioGroupTemplate.bind({});
RadioGroupExample.args = {
  value: "option1",
  label: "Select an Option",
  name: "radioGroup",
  error: false,
  errorMessage: "Please select an option.", // Optional error message
};
