import { Meta, StoryFn } from "@storybook/react";
import { Popover, Button, Typography } from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import React from "react";

(Popover as React.ForwardRefExoticComponent<any>).displayName = "Popover";

// Storybook meta information
export default {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    anchorOrigin: {
      control: "object",
      description: "The anchor position of the popover.",
      defaultValue: { vertical: "bottom", horizontal: "center" },
    },
    transformOrigin: {
      control: "object",
      description: "The transform origin of the popover.",
      defaultValue: { vertical: "top", horizontal: "center" },
    },
    open: {
      control: "boolean",
      description: "Controls whether the popover is open.",
      defaultValue: false,
    },
    onClose: { action: "closed" },
    children: {
      control: "text",
      description: "Content to display inside the popover.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Popover>;

// Template for the Popover component
const Template: StoryFn<typeof Popover> = (args) => {
  const [open, setOpen] = React.useState(args.open);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button ref={anchorRef} onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={args.anchorOrigin}
        transformOrigin={args.transformOrigin}
      >
        <Typography sx={{ p: 2 }}>{args.children}</Typography>
      </Popover>
    </div>
  );
};

// Default Popover story
export const Default = Template.bind({});
Default.args = {
  open: false,
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
  transformOrigin: { vertical: "top", horizontal: "center" },
  children: "This is the default popover content.",
};

// Simple Popover example
export const SimplePopover = Template.bind({});
SimplePopover.args = {
  open: false,
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
  transformOrigin: { vertical: "top", horizontal: "center" },
  children: "This is a simple popover.",
};

// Popover with multiple elements
export const MultiElementPopover = Template.bind({});
MultiElementPopover.args = {
  open: false,
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
  transformOrigin: { vertical: "top", horizontal: "center" },
  children: (
    <div>
      <Typography>This is a popover with multiple elements.</Typography>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </div>
  ),
};

// Custom positioning Popover
export const CustomPositionPopover = Template.bind({});
CustomPositionPopover.args = {
  open: false,
  anchorOrigin: { vertical: "top", horizontal: "left" },
  transformOrigin: { vertical: "bottom", horizontal: "right" },
  children: "This popover has custom positioning.",
};

// Controlled Popover example
export const ControlledPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button onClick={handleClick}>Open Controlled Popover</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Typography sx={{ p: 2 }}>This is a controlled popover.</Typography>
      </Popover>
    </div>
  );
};
