import { Meta, StoryFn } from "@storybook/react";
import { Popper, Button, Paper } from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import { useState, MouseEvent, useRef } from "react";

(Popper as React.ForwardRefExoticComponent<any>).displayName = "Popper";

// Storybook meta information
export default {
  title: "Components/Popper",
  component: Popper,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the visibility of the Popper.",
    },
    anchorEl: {
      control: "object",
      description: "Element used as the anchor for the Popper.",
    },
    placement: {
      control: "select",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
      description: "Positioning of the Popper relative to the anchor.",
    },
    modifiers: {
      control: "object",
      description: "Additional modifiers to customize the Popper's behavior.",
    },
    onClose: { action: "closed" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Popper>;

// Template for the Popper component
const Template: StoryFn<typeof Popper> = (args) => {
  const [open, setOpen] = useState(args.open);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
    anchorRef.current = event.currentTarget;
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick} ref={anchorRef}>
        Toggle Popper
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement={args.placement} modifiers={args.modifiers}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          {args.content}
        </Paper>
      </Popper>
    </>
  );
};

export const BasicPopper = Template.bind({});
BasicPopper.args = {
  open: false,
  placement: "bottom",
  modifiers: {},
  content: "This is a simple popper.",
};

export const ControlledPopper = Template.bind({});
ControlledPopper.args = {
  open: false,
  placement: "top",
  modifiers: {},
  content: "Controlled popper using state.",
};

export const CustomModifiers = Template.bind({});
CustomModifiers.args = {
  open: false,
  placement: "right",
  modifiers: {
    offset: {
      name: "offset",
      options: {
        offset: [0, 10], // Example offset value
      },
    },
  },
  content: "Popper with custom modifiers.",
};

export const MultiPopper = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const anchorRef1 = useRef<HTMLButtonElement | null>(null);
  const anchorRef2 = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen1((prev) => !prev)}
        ref={anchorRef1}
      >
        Toggle First Popper
      </Button>
      <Popper open={open1} anchorEl={anchorRef1.current} placement="bottom">
        <Paper elevation={3} style={{ padding: '16px' }}>
          First Popper Content
        </Paper>
      </Popper>

      <Button
        variant="contained"
        onClick={() => setOpen2((prev) => !prev)}
        ref={anchorRef2}
      >
        Toggle Second Popper
      </Button>
      <Popper open={open2} anchorEl={anchorRef2.current} placement="bottom">
        <Paper elevation={3} style={{ padding: '16px' }}>
          Second Popper Content
        </Paper>
      </Popper>
    </>
  );
};

export const PlacementVariations = () => {
  const placements = ["top", "bottom", "left", "right"];
  const [openStates, setOpenStates] = useState(
    new Array(placements.length).fill(false)
  );
  const anchorRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index]; // Toggle the specific popper's state
      return newStates;
    });
  };

  return (
    <>
      {placements.map((placement, index) => (
        <div key={placement} style={{ margin: "10px" }}>
          <Button
            variant="contained"
            onClick={() => handleToggle(index)}
            ref={(el) => (anchorRefs.current[index] = el)} // Assign button reference
          >
            Toggle Popper (Placement: {placement})
          </Button>
          <Popper open={openStates[index]} anchorEl={anchorRefs.current[index]} placement={placement}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              Popper with {placement} placement.
            </Paper>
          </Popper>
        </div>
      ))}
    </>
  );
};
