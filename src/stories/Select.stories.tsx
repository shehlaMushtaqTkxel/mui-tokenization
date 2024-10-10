import { Meta, StoryFn } from "@storybook/react";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

(Select as React.FC).displayName = "Select";
(MenuItem as React.FC).displayName = "MenuItem";
(FormControl as React.FC).displayName = "FormControl";
(InputLabel as React.FC).displayName = "InputLabel";
(FormHelperText as React.FC).displayName = "FormHelperText";

// Storybook meta information
export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text",
      description: "Label for the select",
    },
    disabled: {
      control: "boolean",
    },
    defaultValue: {
      control: "text",
      description: "Default selected value",
    },
    error: {
      control: "boolean",
      description: "Indicates whether the select has an error.",
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the select.",
    },
    onChange: { action: "changed" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Select>;

// Template for the Select component
const Template: StoryFn<typeof Select> = (args) => (
  <FormControl variant={args.variant} size={args.size} error={args.error} fullWidth>
    <InputLabel>{args.label}</InputLabel>
    <Select
      label={args.label}
      defaultValue={args.defaultValue}
      disabled={args.disabled}
      onChange={args.onChange}
    >
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
    {args.helperText && <FormHelperText>{args.helperText}</FormHelperText>}
  </FormControl>
);

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  color: "primary",
  size: "medium",
  label: "Select an option",
  defaultValue: "option1",
  disabled: false,
  error: false,
  helperText: "This is a helper text.",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  variant: "outlined",
  color: "primary",
  size: "medium",
  label: "Select an option",
  defaultValue: "",
  disabled: false,
  error: true,
  helperText: "This field is required.",
};