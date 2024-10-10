import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Box } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import withThemeProvider from "./withThemeProvider";

(SpeedDial as React.ForwardRefExoticComponent<any>).displayName = "SpeedDial";
(SpeedDialAction as React.ForwardRefExoticComponent<any>).displayName = "SpeedDialAction";
(Box as React.ForwardRefExoticComponent<any>).displayName = "Box";

(SpeedDialIcon as React.FunctionComponent<any>).displayName = "SpeedDialIcon";
(FileCopyIcon as React.FunctionComponent<any>).displayName = "FileCopyIcon";
(PrintIcon as React.FunctionComponent<any>).displayName = "PrintIcon";
(ShareIcon as React.FunctionComponent<any>).displayName = "ShareIcon";

// Storybook meta information
export default {
  title: "Components/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: "text",
      description: "Label for the SpeedDial component",
      defaultValue: "SpeedDial example",
    },
    direction: {
      control: "select",
      options: ["up", "down", "left", "right"],
      description: "The direction the actions open relative to the floating action button.",
      defaultValue: "up",
    },
    hidden: {
      control: "boolean",
      description: "If `true`, the SpeedDial will be hidden.",
      defaultValue: false,
    },
    openIcon: {
      control: "text",
      description: "Icon to display when the SpeedDial is open.",
    },
    onClose: {
      action: "closed",
      description: "Callback fired when the SpeedDial is closed.",
    },
    onOpen: {
      action: "opened",
      description: "Callback fired when the SpeedDial is opened.",
    },
    open: {
      control: "boolean",
      description: "Control the open state of the SpeedDial.",
      defaultValue: false,
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof SpeedDial>;

// Template for the SpeedDial component
const Template: StoryFn<typeof SpeedDial> = (args) => (
  <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
    <SpeedDial
      ariaLabel={args.ariaLabel}
      direction={args.direction}
      hidden={args.hidden}
      openIcon={args.openIcon && <SpeedDialIcon openIcon={args.openIcon} />}
      onClose={args.onClose}
      onOpen={args.onOpen}
      open={args.open}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={<FileCopyIcon />}
        tooltipTitle="Copy"
        onClick={() => console.log("Copy clicked")}
      />
      <SpeedDialAction
        icon={<SaveIcon />}
        tooltipTitle="Save"
        onClick={() => console.log("Save clicked")}
      />
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
        onClick={() => console.log("Print clicked")}
      />
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
        onClick={() => console.log("Share clicked")}
      />
    </SpeedDial>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  ariaLabel: "SpeedDial example",
  direction: "up",
  hidden: false,
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  ariaLabel: "SpeedDial with custom open icon",
  direction: "up",
  openIcon: "🔓", // Example of a custom open icon
  hidden: false,
};

export const HiddenSpeedDial = Template.bind({});
HiddenSpeedDial.args = {
  ariaLabel: "Hidden SpeedDial",
  direction: "up",
  hidden: true,
};

// Example with open controlled by Storybook control
export const ControlledOpenState = Template.bind({});
ControlledOpenState.args = {
  ariaLabel: "SpeedDial with controlled open state",
  direction: "up",
  open: true,
};
