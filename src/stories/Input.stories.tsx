import { Meta, StoryFn } from "@storybook/react";
import { TextField } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

(TextField as React.ForwardRefExoticComponent<any>).displayName = "TextField";

// Storybook meta information
export default {
  title: "Components/Input",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "standard"],
    },
    label: {
      control: "text",
      description: "Input label",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    disabled: {
      control: "boolean",
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the input",
    },
    error: {
      control: "boolean",
      description: "Indicates whether the input should display an error state",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display below the input",
    },
    onChange: { action: "changed" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof TextField>;

// Template for the Input component
const Template: StoryFn<typeof TextField> = (args) => (
  <TextField 
    {...args} 
    error={args.error} 
    helperText={args.error ? args.errorMessage : args.helperText} 
  />
);

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  label: "Enter text",
  color: "primary",
  size: "medium",
  disabled: false,
  helperText: "This is a helper text",
  error: false,
  errorMessage: "This field is required",
};
