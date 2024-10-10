import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

// Setting display names for better debugging
(Snackbar as React.ForwardRefExoticComponent<any>).displayName = "Snackbar";
(Button as React.ForwardRefExoticComponent<any>).displayName = "Button";
(Alert as React.ForwardRefExoticComponent<any>).displayName = "Alert";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    message: {
      control: "text",
      description: "The message to display inside the snackbar",
      defaultValue: "This is a snackbar message",
    },
    open: {
      control: "boolean",
      description: "If `true`, the snackbar is open",
    },
    autoHideDuration: {
      control: "number",
      description: "Milliseconds to wait before automatically closing the snackbar",
      defaultValue: 6000,
    },
    anchorOrigin: {
      control: {
        type: "object",
      },
      description: "The anchor of the Snackbar on the screen",
      defaultValue: { vertical: "bottom", horizontal: "center" },
    },
    onClose: {
      action: "closed",
      description: "Callback fired when the snackbar requests to be closed",
    },
    severity: {
      control: "select",
      options: ["error", "warning", "info", "success"],
      description: "The severity level of the alert inside the snackbar",
      if: { arg: "variant", eq: "alert" },
    },
  },
} as Meta<typeof Snackbar>;

interface AlertSnackbarProps {
  open: boolean;
  message: string;
  severity?: AlertProps["severity"];
  onClose: () => void;
}

const AlertSnackbar: React.FC<AlertSnackbarProps> = ({ open, message, severity, onClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
    <Alert onClose={onClose} severity={severity || "info"} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
);

// Default template for basic Snackbar
const Template: StoryFn<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Show Snackbar
      </Button>
      <Snackbar
        {...args}
        open={open}
        onClose={handleClose}
        message={args.message || "Snackbar Message"}
        anchorOrigin={args.anchorOrigin}
      />
    </div>
  );
};

// Default Snackbar story
export const Default = Template.bind({});
Default.args = {
  message: "This is a default snackbar message",
  autoHideDuration: 6000,
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
};

// Alert Snackbar story
export const WithAlert = (args: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Show Alert Snackbar
      </Button>
      <AlertSnackbar
        open={open}
        message={args.message}
        severity={args.severity}
        onClose={handleClose}
      />
    </div>
  );
};
WithAlert.args = {
  message: "This is an alert inside a snackbar",
  severity: "success",
};

// Snackbar positioned at top-left
export const TopLeftSnackbar = Template.bind({});
TopLeftSnackbar.args = {
  message: "Snackbar at the top-left",
  anchorOrigin: { vertical: "top", horizontal: "left" },
};

// Snackbar without auto-hide
export const PersistentSnackbar = Template.bind({});
PersistentSnackbar.args = {
  message: "This snackbar will persist until dismissed",
  autoHideDuration: null,
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
};

// Snackbar with clickaway handling
export const ClickawaySnackbar = Template.bind({});
ClickawaySnackbar.args = {
  message: "Clickaway won't close this snackbar",
  autoHideDuration: 6000,
  onClose: (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    alert("Snackbar closed");
  },
};
