import { Meta, StoryFn } from "@storybook/react";
import { Paper } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

(Paper as React.ForwardRefExoticComponent<any>).displayName = "Paper";

// Storybook meta information
export default {
  title: "Components/Paper",
  component: Paper,
  tags: ["autodocs"],
  argTypes: {
    elevation: {
      control: "select",
      options: [0, 1, 2, 3, 4, 6, 8, 12, 16, 24],
      description: "Shadow depth of the paper.",
    },
    variant: {
      control: "select",
      options: ["elevation", "outlined"],
      description: "The variant of the paper component.",
    },
    square: {
      control: "boolean",
      description: "If true, border-radius is set to 0.",
    },
    children: {
      control: "text",
      description: "Content to be rendered inside the Paper.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Paper>;

// Template for the Paper component
const Template: StoryFn<typeof Paper> = (args) => (
  <Paper elevation={args.elevation} variant={args.variant} square={args.square}>
    {args.children}
  </Paper>
);

export const Default = Template.bind({});
Default.args = {
  elevation: 1,
  variant: "elevation",
  square: false,
  children: "This is a default Paper component.",
};

export const Outlined = Template.bind({});
Outlined.args = {
  elevation: 0,
  variant: "outlined",
  square: false,
  children: "This is an outlined Paper component.",
};

export const Square = Template.bind({});
Square.args = {
  elevation: 1,
  variant: "elevation",
  square: true,
  children: "This Paper has square corners.",
};
