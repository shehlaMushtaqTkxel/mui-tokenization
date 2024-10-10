import { Meta, StoryFn } from "@storybook/react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Fade,
  Backdrop,
} from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import React from "react";

// Define enhanced styles for the modal box
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#f5f5f5', // Light grey background
  border: '1px solid #ccc', // Light border
  boxShadow: 24,
  borderRadius: '8px', // Rounded corners
  padding: '20px',
  outline: 'none', // Remove default outline
};

// Storybook meta information
export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the modal is open.",
    },
    onClose: {
      action: "closed",
      description: "Function to call when the modal is closed.",
    },
    title: {
      control: "text",
      description: "Title to display in the modal.",
    },
    content: {
      control: "text",
      description: "Content to display in the modal.",
    },
    actions: {
      control: "object",
      description: "Array of action buttons to display in the modal.",
    },
    transition: {
      control: "boolean",
      description: "Controls the use of a transition effect for the modal.",
    },
    backdrop: {
      control: "boolean",
      description: "Controls the visibility of the backdrop.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Modal>;

// Template for the Modal component
const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = React.useState(args.open);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    args.onClose();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition={args.transition}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          invisible: !args.backdrop,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h5" component="h2" gutterBottom>
              {args.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {args.content}
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              {args.actions?.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  color={action.color || "primary"}
                  variant="contained"
                  sx={{ mr: 1 }}
                >
                  {action.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

// Basic Modal
export const BasicModal = Template.bind({});
BasicModal.args = {
  open: false,
  title: "Basic Modal",
  content: "This is a basic modal example with improved styling.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: false,
  backdrop: true,
};

// Centered Modal
export const CenteredModal = Template.bind({});
CenteredModal.args = {
  open: false,
  title: "Centered Modal",
  content: "This modal is centered on the screen with a nice layout.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: true,
  backdrop: true,
};

// Nested Modal
const NestedTemplate: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    args.onClose();
  };

  const handleNestedOpen = () => setNestedOpen(true);
  const handleNestedClose = () => setNestedOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Nested Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h5" component="h2" gutterBottom>
              {args.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {args.content}
            </Typography>
            <Button variant="contained" onClick={handleNestedOpen}>
              Open Nested Modal
            </Button>
            <Modal
              open={nestedOpen}
              onClose={handleNestedClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
            >
              <Fade in={nestedOpen}>
                <Box sx={style}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Nested Modal
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    This is a nested modal.
                  </Typography>
                  <Button variant="contained" onClick={handleNestedClose}>
                    Close
                  </Button>
                </Box>
              </Fade>
            </Modal>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button onClick={handleClose} color="secondary">
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export const NestedModal = NestedTemplate.bind({});
NestedModal.args = {
  open: false,
  title: "Nested Modal",
  content: "This modal contains another modal inside it.",
};

// Modal with Actions
export const ModalWithActions = Template.bind({});
ModalWithActions.args = {
  open: false,
  title: "Modal with Actions",
  content: "This modal has action buttons for user interaction.",
  actions: [
    { label: "Cancel", onClick: () => console.log("Cancel clicked"), color: "secondary" },
    { label: "Submit", onClick: () => console.log("Submit clicked") },
  ],
  transition: false,
  backdrop: true,
};

// Modal with Transition
export const ModalWithTransition = Template.bind({});
ModalWithTransition.args = {
  open: false,
  title: "Modal with Transition",
  content: "This modal includes a smooth transition effect.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: true,
  backdrop: true,
};

// Modal without Backdrop
export const ModalWithoutBackdrop = Template.bind({});
ModalWithoutBackdrop.args = {
  open: false,
  title: "Modal Without Backdrop",
  content: "This modal doesn't have a backdrop for a unique look.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: true,
  backdrop: false,
};

// Full-Screen Modal
export const FullScreenModal = Template.bind({});
FullScreenModal.args = {
  open: false,
  title: "Full Screen Modal",
  content: "This modal covers the entire screen with beautiful styling.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: true,
  backdrop: true,
};

// Custom Styled Modal
export const CustomStyledModal = Template.bind({});
CustomStyledModal.args = {
  open: false,
  title: "Custom Styled Modal",
  content: "This modal demonstrates custom styling for an enhanced look.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: true,
  backdrop: true,
};

// Additional customization styles
const customStyle = {
  ...style,
  bgcolor: '#e3f2fd', // Light blue background
  border: '3px solid #1976d2', // Primary color border
};

// Overriding the Template for Custom Styled Modal
const CustomTemplate: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = React.useState(args.open);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    args.onClose();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Custom Styled Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition={args.transition}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          invisible: !args.backdrop,
        }}
      >
        <Fade in={open}>
          <Box sx={customStyle}>
            <Typography variant="h5" component="h2" gutterBottom>
              {args.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {args.content}
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              {args.actions?.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  color={action.color || "primary"}
                  variant="contained"
                  sx={{ mr: 1 }}
                >
                  {action.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export const CustomStyledModalExample = CustomTemplate.bind({});
CustomStyledModalExample.args = {
  open: false,
  title: "Custom Styled Modal Example",
  content: "This modal demonstrates custom styling.",
  actions: [
    { label: "Close", onClick: () => console.log("Close clicked") },
  ],
  transition: true,
  backdrop: true,
};
