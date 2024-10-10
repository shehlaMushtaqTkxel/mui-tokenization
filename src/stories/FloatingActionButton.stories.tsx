import { Meta, StoryFn } from "@storybook/react";
import { Fab } from "@mui/material";
import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import withThemeProvider from "./withThemeProvider";

// Setting display names for better debugging
(Fab as React.ForwardRefExoticComponent<any>).displayName = "Fab";
(NavigationIcon as React.FunctionComponent<any>).displayName = "NavigationIcon"; // Setting display name for debugging

export default {
  title: "Components/FloatingActionButton",
  component: Fab,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary"],
      description: "The color of the floating action button.",
    },
    variant: {
      control: "select",
      options: ["circular", "extended"],
      description: "The variant of the floating action button.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the button.",
    },
    disabled: {
      control: "boolean",
      description: "If true, the button will be disabled.",
    },
    text: {
      control: "text",
      description: "Text to display on the button when in extended mode.",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the button is clicked.",
    },
  },
} as Meta<typeof Fab>;

// Template for the Floating Action Button with controls
const Template: StoryFn<typeof Fab> = (args) => {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    setScale(1.2); // Scale up for the transition effect
    setTimeout(() => setScale(1), 200); // Reset scale after 200ms
    if (args.onClick) {
      args.onClick();
    }
  };

  return (
    <Fab
      {...args}
      onClick={handleClick}
      sx={{ transform: `scale(${scale})`, transition: "transform 0.2s" }} // Adding transition
    >
      {args.variant === "extended" ? (
        <>
          <NavigationIcon sx={{ mr: 1 }} />
          {args.text}
        </>
      ) : (
        <NavigationIcon />
      )}
    </Fab>
  );
};

// Default Floating Action Button story with controls
export const ControlledButton = Template.bind({});
ControlledButton.args = {
  color: "primary",
  variant: "circular",
  size: "medium",
  disabled: false,
  text: "Extended", // Default text when extended
};
