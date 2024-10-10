import { Meta, StoryFn } from "@storybook/react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Checkbox } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

(Card as React.ForwardRefExoticComponent<any>).displayName = "Card";
(CardActions as React.ForwardRefExoticComponent<any>).displayName = "CardActions";
(CardContent as React.ForwardRefExoticComponent<any>).displayName = "CardContent";
(CardMedia as React.ForwardRefExoticComponent<any>).displayName = "CardMedia";
(Button as React.ForwardRefExoticComponent<any>).displayName = "Button";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
(Checkbox as React.ForwardRefExoticComponent<any>).displayName = "Checkbox";

// Storybook meta information
export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    media: {
      control: "boolean",
      description: "Controls whether to display an image in the card.",
    },
    title: {
      control: "text",
      description: "Title of the card",
    },
    content: {
      control: "text",
      description: "Main content of the card",
    },
    actions: {
      control: "boolean",
      description: "Controls whether to display actions (buttons) in the card.",
    },
    buttonText: {
      control: "text",
      description: "Text for the action button",
      if: { arg: "actions", truthy: true },
    },
    elevation: {
      control: "number",
      description: "Set the elevation (box-shadow depth) of the card",
    },
    outlined: {
      control: "boolean",
      description: "Set the card as outlined instead of elevated",
    },
    onButtonClick: { action: "clicked", description: "Handler for button click" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Card>;

// Template for the Card component
const Template: StoryFn<typeof Card> = (args) => (
  <Card sx={{ maxWidth: 345 }} elevation={args.outlined ? 0 : args.elevation} variant={args.outlined ? "outlined" : undefined}>
    {args.media && (
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Placeholder Image"
      />
    )}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {args.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {args.content}
      </Typography>
    </CardContent>
    {args.actions && (
      <CardActions>
        <Button size="small" onClick={args.onButtonClick}>
          {args.buttonText}
        </Button>
      </CardActions>
    )}
  </Card>
);

// Basic Card
export const Basic = Template.bind({});
Basic.args = {
  media: false,
  title: "Basic Card",
  content: "This is a simple card with only text content.",
  actions: false,
  elevation: 1,
  outlined: false,
};

// Card with Media
export const WithMedia = Template.bind({});
WithMedia.args = {
  media: true,
  title: "Card with Media",
  content: "This card displays an image at the top and text content below.",
  actions: true,
  buttonText: "Learn More",
  elevation: 3,
  outlined: false,
};

// Card with Actions
export const WithActions = Template.bind({});
WithActions.args = {
  media: true,
  title: "Card with Actions",
  content: "This card has buttons for actions such as 'Learn More'.",
  actions: true,
  buttonText: "Learn More",
  elevation: 3,
  outlined: false,
};

// Outlined Card
export const Outlined = Template.bind({});
Outlined.args = {
  media: true,
  title: "Outlined Card",
  content: "This card has an outlined appearance, without shadow elevation.",
  actions: true,
  buttonText: "Learn More",
  elevation: 0,
  outlined: true,
};

// Complex Interaction
export const ComplexInteraction = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Complex Interaction Card
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This card demonstrates a complex interaction, such as a Checkbox.
      </Typography>
    </CardContent>
    <CardActions>
      <Checkbox />
      <Button size="small">Select</Button>
    </CardActions>
  </Card>
);
