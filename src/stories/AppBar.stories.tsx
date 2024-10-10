// AppBar.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Collapse,
  Paper,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import withThemeProvider from "./withThemeProvider";
import MenuIcon from "@mui/icons-material/Menu";

// Setting display names for better debugging
(AppBar as React.ForwardRefExoticComponent<any>).displayName = "AppBar";
(Toolbar as React.ForwardRefExoticComponent<any>).displayName = "Toolbar";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
(IconButton as React.ForwardRefExoticComponent<any>).displayName = "IconButton";
(Button as React.ForwardRefExoticComponent<any>).displayName = "Button";
(Collapse as React.ForwardRefExoticComponent<any>).displayName = "Collapse";
(Paper as React.ForwardRefExoticComponent<any>).displayName = "Paper";
(FavoriteBorderIcon as React.FunctionComponent<any>).displayName =
  "FavoriteBorderIcon";
(MenuIcon as React.FunctionComponent<any>).displayName = "MenuIcon";

export default {
  title: "Components/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary"],
      description: "The color of the AppBar.",
    },
    position: {
      control: "select",
      options: ["fixed", "absolute", "sticky", "static", "relative"],
      description: "The position of the AppBar.",
    },
    collapse: {
      control: "boolean",
      description: "Show or hide the collapse section.",
    },
  },
} as Meta<typeof AppBar>;

// Template for the AppBar
const Template: StoryFn<typeof AppBar> = (args) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar position={args.position} color={args.color}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Material-UI AppBar
          </Typography>
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            <FavoriteBorderIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Collapse in={open}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="body1">Additional Content Here</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

// Default AppBar story
export const Default = Template.bind({});
Default.args = {
  color: "primary",
  position: "fixed",
  collapse: false,
};
