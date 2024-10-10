import { Meta, StoryFn } from "@storybook/react";
import { ButtonGroup, Button, Typography } from "@mui/material";
import React from "react";
import withThemeProvider from "./withThemeProvider";

// Setting display names for better debugging
(ButtonGroup as React.ForwardRefExoticComponent<any>).displayName = "ButtonGroup";
(Button as React.ForwardRefExoticComponent<any>).displayName = "Button";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "error", "info", "warning"],
      description: "The color of the button group.",
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
      description: "The variant to use.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the button group.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the buttons.",
    },
    disableElevation: {
      control: "boolean",
      description: "If true, the buttons will have no elevation.",
    },
    fullWidth: {
      control: "boolean",
      description: "If true, the buttons will take up the full width.",
    },
  },
} as Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

// Default ButtonGroup
export const Default = Template.bind({});
Default.args = {
  color: "primary",
  variant: "contained",
};

// Outlined ButtonGroup
export const OutlinedGroup = Template.bind({});
OutlinedGroup.args = {
  color: "secondary",
  variant: "outlined",
};

// Vertical ButtonGroup
export const VerticalGroup = Template.bind({});
VerticalGroup.args = {
  orientation: "vertical",
  color: "default",
};

// Small ButtonGroup
export const SmallGroup = Template.bind({});
SmallGroup.args = {
  size: "small",
};

// Full Width ButtonGroup
export const FullWidthGroup = Template.bind({});
FullWidthGroup.args = {
  fullWidth: true,
};

