import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@mui/material";
import withThemeProvider from "./withThemeProvider";
Button.displayName = "Button";

// Storybook meta information
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
      description: "Button label",
    },
    onClick: { action: "clicked" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Button>;

// Template for the Button component
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
  color: "primary",
  size: "medium",
  children: "Click Me",
  disabled: false,
};
