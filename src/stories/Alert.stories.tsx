import { Meta, StoryFn } from "@storybook/react";
import { Alert, AlertTitle } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

// Display name for the Alert component
(Alert as React.FC).displayName = "Alert";
(AlertTitle as React.FC).displayName = "AlertTitle";
// Storybook meta information
export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "select",
      options: ["error", "warning", "info", "success"],
      description: "The severity level of the alert.",
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
      description: "The variant of the alert.",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "error", "info", "warning"],
      description: "The color of the alert.",
    },
    icon: {
      control: "boolean",
      description: "If true, the icon is displayed.",
    },
    onClose: {
      action: "closed",
      description: "Triggered when the close button is clicked.",
    },
    title: {
      control: "text",
      description: "Optional title for the alert.",
    },
    children: {
      control: "text",
      description: "The main content of the alert.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Alert>;

// Template for the Alert component
const Template: StoryFn<typeof Alert> = (args) => (
  <Alert
    severity={args.severity}
    variant={args.variant}
    color={args.color !== "default" ? args.color : undefined}
    icon={args.icon ? undefined : false}
    onClose={args.onClose ? () => {} : undefined}
  >
    {args.title && <AlertTitle>{args.title}</AlertTitle>}
    {args.children}
  </Alert>
);

// Default story for the Alert component
export const Default = Template.bind({});
Default.args = {
  severity: "info",
  variant: "standard",
  color: "default",
  icon: true,
  title: "Alert Title",
  children: "This is an alert — check it out!",
};
