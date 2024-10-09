import { Meta, StoryFn } from "@storybook/react";
import { Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import React from "react";
import withThemeProvider from "./withThemeProvider";

// Setting display names for better debugging
(Chip as React.ForwardRefExoticComponent<any>).displayName = "Chip";
(Stack as React.ForwardRefExoticComponent<any>).displayName = "Stack";

export default {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    label: {
      control: "text",
      description: "The text displayed on the chip.",
    },
    icon: {
      control: "select",
      options: [null, <FaceIcon />],
      description: "Icon to display in the chip.",
    },
    variant: {
      control: "select",
      options: ["filled", "outlined"],
      description: "The variant to use.",
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
      description: "The color of the chip.",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the chip.",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the chip is clicked.",
    },
    onDelete: {
      action: "deleted",
      description: "Callback fired when the delete icon is clicked.",
    },
    deletable: {
      control: "boolean",
      description: "If true, the chip will be deletable.",
    },
    clickable: {
      control: "boolean",
      description: "If true, the chip will be clickable.",
    },
  },
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

// Default Chip
export const DefaultChip = Template.bind({});
DefaultChip.args = {
  label: "Default Chip",
};

// Chip with Icon
export const ChipWithIcon = Template.bind({});
ChipWithIcon.args = {
  label: "Chip with Icon",
  icon: <FaceIcon />,
};

// Clickable Chip
export const ClickableChip = Template.bind({});
ClickableChip.args = {
  label: "Clickable Chip",
  clickable: true,
};

// Deletable Chip
export const DeletableChip = Template.bind({});
DeletableChip.args = {
  label: "Deletable Chip",
  onDelete: () => {},
  deletable: true,
};

// Chip with Custom Color
export const ColoredChip = Template.bind({});
ColoredChip.args = {
  label: "Colored Chip",
  color: "success",
};

// Outlined Chip
export const OutlinedChip = Template.bind({});
OutlinedChip.args = {
  label: "Outlined Chip",
  variant: "outlined",
};

// Small Chip
export const SmallChip = Template.bind({});
SmallChip.args = {
  label: "Small Chip",
  size: "small",
};

// Stack of Chips
export const ChipStack = () => (
  <Stack direction="row" spacing={1}>
    <Chip label="Chip 1" />
    <Chip label="Chip 2" onDelete={() => {}} deletable />
    <Chip label="Chip 3" color="primary" />
    <Chip label="Chip 4" icon={<FaceIcon />} />
  </Stack>
);
