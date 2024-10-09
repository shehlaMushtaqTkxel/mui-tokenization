import { Meta, StoryFn } from "@storybook/react";
import { CircularProgress, LinearProgress } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

// Display name for the CircularProgress and LinearProgress components
(CircularProgress as React.FC).displayName = "CircularProgress";
(LinearProgress as React.FC).displayName = "LinearProgress";

// Storybook meta information
export default {
  title: "Components/Progress",
  component: CircularProgress,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["determinate", "indeterminate", "buffer", "query"],
      description: "The variant of the progress indicator.",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "inherit"],
      description: "The color of the progress indicator.",
    },
    value: {
      control: "number",
      description: "The progress value for determinate or buffer variants (0-100).",
    },
    valueBuffer: {
      control: "number",
      description: "The buffer value for the buffer variant (0-100).",
    },
    thickness: {
      control: "number",
      description: "The thickness of the circular progress indicator.",
    },
    size: {
      control: "number",
      description: "The size of the circular progress indicator in pixels.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof CircularProgress | typeof LinearProgress>;

// Template for the CircularProgress component
const CircularProgressTemplate: StoryFn<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

// Template for the LinearProgress component
const LinearProgressTemplate: StoryFn<typeof LinearProgress> = (args) => (
  <LinearProgress {...args} />
);

// Default story for the CircularProgress component
export const CircularDefault = CircularProgressTemplate.bind({});
CircularDefault.args = {
  variant: "indeterminate",
  color: "primary",
  thickness: 3.6,
  size: 40,
};

// Default story for the LinearProgress component
export const LinearDefault = LinearProgressTemplate.bind({});
LinearDefault.args = {
  variant: "indeterminate",
  color: "primary",
  value: 50,
  valueBuffer: 60,
};
