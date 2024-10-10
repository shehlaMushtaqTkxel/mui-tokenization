import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Slide,
  Zoom,
  Grow,
} from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import { TransitionProps } from '@mui/material/transitions';

// Display name for the Dialog component
(Dialog as React.FC).displayName = "Dialog";

// Slide Transition Component
const TransitionSlide = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Zoom Transition Component
const TransitionZoom = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

// Grow Transition Component
const TransitionGrow = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />;
});

// Storybook meta information
export default {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the dialog is open or closed.",
    },
    fullScreen: {
      control: "boolean",
      description: "If true, the dialog will be full-screen.",
    },
    transition: {
      control: "select",
      options: ["Slide", "Zoom", "Grow", "None"],
      description: "The transition effect applied to the dialog.",
    },
    title: {
      control: "text",
      description: "The title of the dialog.",
    },
    content: {
      control: "text",
      description: "The main content of the dialog.",
    },
    actions: {
      control: "boolean",
      description: "Enable or disable actions like Cancel and Agree.",
    },
    disableBackdropClick: {
      control: "boolean",
      description: "If true, clicking on the backdrop will not close the dialog.",
    },
    disableEscapeKeyDown: {
      control: "boolean",
      description: "If true, pressing the escape key will not close the dialog.",
    },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", false],
      description: "The maximum width of the dialog.",
    },
    scroll: {
      control: "select",
      options: ["paper", "body"],
      description: "The scrolling behavior of the dialog.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Dialog>;

// Template for the Dialog component with transitions
const Template: StoryFn<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(args.open || false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTransitionComponent = () => {
    switch (args.transition) {
      case "Slide":
        return TransitionSlide;
      case "Zoom":
        return TransitionZoom;
      case "Grow":
        return TransitionGrow;
      default:
        return undefined;
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={getTransitionComponent()}
        fullScreen={args.fullScreen}
        disableBackdropClick={args.disableBackdropClick}
        disableEscapeKeyDown={args.disableEscapeKeyDown}
        maxWidth={args.maxWidth}
        scroll={args.scroll}
      >
        <DialogTitle>{args.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{args.content}</DialogContentText>
        </DialogContent>
        {args.actions && (
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

// Default story for the Dialog
export const DefaultDialog = Template.bind({});
DefaultDialog.args = {
  open: false,
  transition: "Slide",
  fullScreen: false,
  title: "Dialog Title",
  content: "This is the dialog content.",
  actions: true,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  maxWidth: "sm",
  scroll: "paper",
};

// Story for Form Dialog
const FormTemplate: StoryFn<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Form Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{args.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{args.content}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Story for Form Dialog
export const FormDialog = FormTemplate.bind({});
FormDialog.args = {
  open: false,
  title: "Subscribe",
  content: "Please enter your email address to subscribe to the newsletter.",
};

// Story for Confirmation Dialog
const ConfirmationTemplate: StoryFn<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    alert("Confirmed!");
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Confirmation Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{args.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{args.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Story for Confirmation Dialog
export const ConfirmationDialog = ConfirmationTemplate.bind({});
ConfirmationDialog.args = {
  open: false,
  title: "Delete Item?",
  content: "Are you sure you want to delete this item? This action cannot be undone.",
};
