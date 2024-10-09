import { Meta, StoryFn } from "@storybook/react";
import {
  Skeleton,
  Box,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import withThemeProvider from "./withThemeProvider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Setting display names for better debugging
(Skeleton as React.ForwardRefExoticComponent<any>).displayName = "Skeleton";
(Box as React.ForwardRefExoticComponent<any>).displayName = "Box";
(CardMedia as React.ForwardRefExoticComponent<any>).displayName = "CardMedia";
(Card as React.ForwardRefExoticComponent<any>).displayName = "Card";
(CardContent as React.ForwardRefExoticComponent<any>).displayName =
  "CardContent";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
(CardHeader as React.ForwardRefExoticComponent<any>).displayName = "CardHeader";
(Avatar as React.ForwardRefExoticComponent<any>).displayName = "Avatar";
(IconButton as React.ForwardRefExoticComponent<any>).displayName = "IconButton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    animation: {
      control: "select",
      options: ["pulse", "wave", false],
      description: "The type of animation for the skeleton",
    },
    variant: {
      control: "select",
      options: ["text", "rectangular", "circular"],
      description: "The shape of the skeleton",
    },
    width: {
      control: "number",
      description: "The width of the skeleton",
    },
    height: {
      control: "number",
      description: "The height of the skeleton",
    },
    sx: {
      control: "object",
      description: "Override or extend the styles applied to the component",
    },
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => (
  <Box sx={{ width: 300, marginBottom: 4 }}>
    <Skeleton {...args} />
  </Box>
);

// Media Component
interface MediaProps {
  loading?: boolean;
}

const Media: React.FC<MediaProps> = ({ loading = false }) => (
  <Card sx={{ maxWidth: 345, minWidth: 345, m: 2 }}>
    <CardHeader
      avatar={
        loading ? (
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        ) : (
          <Avatar
            alt="Ted talk"
            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
          />
        )
      }
      action={
        loading ? null : (
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        )
      }
      title={
        loading ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          "Ted"
        )
      }
      subheader={
        loading ? <Skeleton animation="wave" height={10} /> : "5 hours ago"
      }
    />
    {loading ? (
      <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
    ) : (
      <CardMedia
        component="img"
        height="140"
        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
        alt="Nicola Sturgeon on a TED talk stage"
      />
    )}
    <CardContent>
      {loading ? (
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} />
        </React.Fragment>
      ) : (
        <Typography
          variant="body2"
          component="p"
          sx={{ color: "text.secondary" }}
        >
          {
            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
          }
        </Typography>
      )}
    </CardContent>
  </Card>
);

// Default Skeleton story
export const Default = Template.bind({});
Default.args = {
  variant: "text",
  animation: "pulse",
  width: 200,
  height: 40,
};

// Rectangular Skeleton
export const Rectangular = Template.bind({});
Rectangular.args = {
  variant: "rectangular",
  animation: "wave",
  width: 300,
  height: 150,
};

// Circular Skeleton
export const Circular = Template.bind({});
Circular.args = {
  variant: "circular",
  animation: "wave",
  width: 100,
  height: 100,
};

// No Animation
export const NoAnimation = Template.bind({});
NoAnimation.args = {
  variant: "text",
  animation: false,
  width: 200,
  height: 40,
};

// Skeleton within a larger box
export const CustomSize = Template.bind({});
CustomSize.args = {
  variant: "rectangular",
  animation: "pulse",
  width: 500,
  height: 200,
  sx: { bgcolor: "grey.300" },
};

// Media Card Story
export const MediaCardExample = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Media loading={true} /> {/* Skeleton Loading State */}
    <Media loading={false} /> {/* Loaded State */}
  </Box>
);
