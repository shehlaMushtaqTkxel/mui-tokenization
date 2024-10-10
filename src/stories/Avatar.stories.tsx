import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarGroup, Box } from "@mui/material";
import React from "react";
import withThemeProvider from "./withThemeProvider";

// Set display names for better debugging
(Avatar as React.ForwardRefExoticComponent<any>).displayName = "Avatar";
(AvatarGroup as React.ForwardRefExoticComponent<any>).displayName =
  "AvatarGroup";
(Avatar as React.FC).displayName = "Avatar";
(Box as React.FC).displayName = "Box";
export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    alt: {
      control: "text",
      description: "Alternative text for the avatar image.",
    },
    src: {
      control: "text",
      description: "The URL of the image used for the avatar.",
    },
    variant: {
      control: "select",
      options: ["circular", "rounded", "square"],
      description: "The shape of the avatar.",
    },
    sx: {
      control: "object",
      description: "Custom styles applied to the avatar.",
    },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Avatar {...args}>A</Avatar>
    <Avatar
      {...args}
      src="https://mui.com/static/images/avatar/1.jpg"
      alt="User Image"
    />
  </Box>
);

// Default Avatar
export const Default = Template.bind({});
Default.args = {
  variant: "circular",
  sx: { width: 40, height: 40 },
};

// Custom Sizes
export const CustomSizes = Template.bind({});
CustomSizes.args = {
  variant: "circular",
  sx: { width: 56, height: 56 },
};

// Square Avatar
export const SquareAvatar = Template.bind({});
SquareAvatar.args = {
  variant: "square",
  sx: { width: 56, height: 56 },
};

// Rounded Avatar
export const RoundedAvatar = Template.bind({});
RoundedAvatar.args = {
  variant: "rounded",
  sx: { width: 56, height: 56 },
};

// Avatar with Image
export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  src: "https://mui.com/static/images/avatar/1.jpg",
  alt: "Remy Sharp",
  variant: "circular",
  sx: { width: 40, height: 40 },
};

// AvatarGroup Example
export const AvatarGroupExample: StoryFn<typeof AvatarGroup> = () => (
  <AvatarGroup max={4}>
    <Avatar alt="User 1" src="https://mui.com/static/images/avatar/1.jpg" />
    <Avatar alt="User 2" src="https://mui.com/static/images/avatar/2.jpg" />
    <Avatar alt="User 3" src="https://mui.com/static/images/avatar/3.jpg" />
    <Avatar alt="User 4" src="https://mui.com/static/images/avatar/4.jpg" />
    <Avatar alt="User 5" src="https://mui.com/static/images/avatar/5.jpg" />
  </AvatarGroup>
);

// Avatar with Text (Initials)
export const AvatarWithText = Template.bind({});
AvatarWithText.args = {
  variant: "circular",
  sx: { width: 56, height: 56, bgcolor: "primary.main" },
  children: "JS",
};

// Custom Avatar Color
export const CustomAvatarColor = Template.bind({});
CustomAvatarColor.args = {
  variant: "circular",
  sx: { width: 56, height: 56, bgcolor: "secondary.main" },
  children: "B",
};
