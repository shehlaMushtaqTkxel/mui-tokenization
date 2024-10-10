import { Meta, StoryFn } from "@storybook/react";
import { Drawer, Button, Box, Typography } from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import { useState } from "react";

// Storybook meta information
(Drawer as React.ForwardRefExoticComponent<any>).displayName = "Drawer";
(Button as React.ForwardRefExoticComponent<any>).displayName = "Button";
(Box as React.ForwardRefExoticComponent<any>).displayName = "Box";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
export default {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "Side of the screen where the drawer will appear.",
    },
    open: {
      control: "boolean",
      description: "Controls the visibility of the drawer.",
    },
    variant: {
      control: "select",
      options: ["temporary", "persistent", "permanent"],
      description: "The variant to use for the drawer.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Drawer>;

// Template for the Drawer component
const Template: StoryFn<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer
        anchor={args.anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        variant={args.variant}
      >
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" gutterBottom>
            Drawer Content
          </Typography>
          <Typography>
            Here is some content inside the drawer. Click anywhere to close the drawer.
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

// Default Drawer Story
export const Default = Template.bind({});
Default.args = {
  anchor: "left",
  open: false,
  variant: "temporary",
};

// Persistent Drawer Story
export const PersistentDrawer = Template.bind({});
PersistentDrawer.args = {
  anchor: "left",
  open: false,
  variant: "persistent",
};

// Permanent Drawer Story
export const PermanentDrawer = Template.bind({});
PermanentDrawer.args = {
  anchor: "left",
  open: true,
  variant: "permanent",
};

// Right Anchor Drawer Story
export const RightAnchorDrawer = Template.bind({});
RightAnchorDrawer.args = {
  anchor: "right",
  open: false,
  variant: "temporary",
};

// Top Anchor Drawer Story
export const TopAnchorDrawer = Template.bind({});
TopAnchorDrawer.args = {
  anchor: "top",
  open: false,
  variant: "temporary",
};

// Bottom Anchor Drawer Story
export const BottomAnchorDrawer = Template.bind({});
BottomAnchorDrawer.args = {
  anchor: "bottom",
  open: false,
  variant: "temporary",
};

// Drawer with custom content example
export const CustomContentDrawer = Template.bind({});
CustomContentDrawer.args = {
  anchor: "left",
  open: false,
  variant: "temporary",
};

// Drawer with longer content
export const LongContentDrawer = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer anchor={args.anchor} open={isOpen} onClose={toggleDrawer(false)} variant={args.variant}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" gutterBottom>
            Drawer Content
          </Typography>
          <Typography paragraph>
            This drawer has a lot of content. You can scroll inside this drawer if the content is longer than the viewport height.
          </Typography>
          {/* Add more content to simulate long content */}
          {[...Array(20)].map((_, index) => (
            <Typography key={index} paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis libero at neque vehicula, vel dictum urna aliquam.
            </Typography>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};
LongContentDrawer.args = {
  anchor: "left",
  open: false,
  variant: "temporary",
};
