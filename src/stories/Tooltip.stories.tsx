import { Meta, StoryFn } from "@storybook/react";
import { Tooltip, Button } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

// Display name for the Tooltip component
(Tooltip as React.FC).displayName = "Tooltip";
(Button as React.FC).displayName = "Button";
// Storybook meta information
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The text to be displayed in the tooltip.",
    },
    placement: {
      control: "select",
      options: [
        "bottom",
        "top",
        "right",
        "left",
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end",
        "right-start",
        "right-end",
        "left-start",
        "left-end",
      ],
      description: "The position of the tooltip relative to the child element.",
    },
    arrow: {
      control: "boolean",
      description: "If true, the tooltip will have an arrow.",
    },
    disableInteractive: {
      control: "boolean",
      description: "If true, the tooltip will not be interactive.",
    },
    enterDelay: {
      control: "number",
      description: "The number of milliseconds to wait before showing the tooltip.",
    },
    leaveDelay: {
      control: "number",
      description: "The number of milliseconds to wait before hiding the tooltip.",
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary"],
      description: "The color of the tooltip.",
    },
    onOpen: { action: "opened", description: "Triggered when the tooltip is opened." },
    onClose: { action: "closed", description: "Triggered when the tooltip is closed." },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Tooltip>;

// Template for the Tooltip component
const Template: StoryFn<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button variant="contained">Hover me</Button>
  </Tooltip>
);

// Default story for the Tooltip component
export const Default = Template.bind({});
Default.args = {
  title: "This is a tooltip",
  placement: "top",
  arrow: true,
  disableInteractive: false,
  enterDelay: 300,
  leaveDelay: 200,
  color: "inherit",
};
