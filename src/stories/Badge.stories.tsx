import { Meta, StoryFn } from "@storybook/react";
import { Badge, Box, IconButton, Avatar, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import withThemeProvider from "./withThemeProvider";

// Setting display names for better debugging
(Badge as React.ForwardRefExoticComponent<any>).displayName = "Badge";
(Box as React.ForwardRefExoticComponent<any>).displayName = "Box";
(MailIcon as React.FunctionComponent<any>).displayName = "MailIcon"; // Setting display name for debugging
(NotificationsIcon as React.FunctionComponent<any>).displayName = "NotificationsIcon"; // Setting display name for debugging

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    badgeContent: {
      control: "number",
      description: "The content rendered within the badge.",
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
      description: "The color of the badge.",
    },
    max: {
      control: "number",
      description: "Max count value before showing a `+` after the number.",
    },
    invisible: {
      control: "boolean",
      description: "If `true`, the badge will be invisible.",
    },
    showZero: {
      control: "boolean",
      description:
        "Controls whether the badge should be displayed when `badgeContent` is 0.",
    },
    variant: {
      control: "select",
      options: ["standard", "dot"],
      description: "The variant to use (dot or standard).",
    },
    anchorOrigin: {
      control: "object",
      description: "Sets the origin of the badge relative to the anchor.",
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Badge {...args}>
      <MailIcon fontSize="large" />
    </Badge>
  </Box>
);

// Default Badge
export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  badgeContent: 4,
  color: "primary",
};

// Badge with Custom Anchor
export const CustomAnchorBadge = Template.bind({});
CustomAnchorBadge.args = {
  badgeContent: 10,
  color: "secondary",
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};

// Dot Badge
export const DotBadge = Template.bind({});
DotBadge.args = {
  variant: "dot",
  color: "success",
};

// Badge with Max Value
export const BadgeWithMaxValue = Template.bind({});
BadgeWithMaxValue.args = {
  badgeContent: 99,
  max: 50,
  color: "error",
};

// Invisible Badge
export const InvisibleBadge = Template.bind({});
InvisibleBadge.args = {
  badgeContent: 0,
  invisible: true,
  showZero: true,
};

// Badge with Avatar
export const BadgeWithAvatar = () => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Badge badgeContent={5} color="primary">
      <Avatar alt="User 1" src="https://mui.com/static/images/avatar/1.jpg" />
    </Badge>
    <Badge badgeContent={99} max={99} color="error">
      <Avatar alt="User 2" src="https://mui.com/static/images/avatar/2.jpg" />
    </Badge>
  </Box>
);

// Badge with IconButton
export const BadgeWithIconButton = () => (
  <IconButton aria-label="show 17 new notifications" color="inherit">
    <Badge badgeContent={17} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
);

// Badge with Button
export const BadgeWithButton = () => (
  <Button variant="contained" color="primary">
    Notifications
    <Badge badgeContent={10} color="error" sx={{ ml: 2 }}>
      <NotificationsIcon />
    </Badge>
  </Button>
);
