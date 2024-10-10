import { Meta, StoryFn } from "@storybook/react";
import { Rating, FormControl, FormHelperText, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import withThemeProvider from "./withThemeProvider";
import React from "react";

// Set display names for the components
(Rating  as React.ForwardRefExoticComponent<any>).displayName = "Rating";
(FormControl  as React.ForwardRefExoticComponent<any>).displayName = "FormControl";
(Typography  as React.ForwardRefExoticComponent<any>).displayName = "Typography";
(FormHelperText  as React.ForwardRefExoticComponent<any>).displayName = "FormHelperText";


(SentimentVeryDissatisfiedIcon as React.FunctionComponent<any>).displayName = "SentimentVeryDissatisfiedIcon";
(SentimentDissatisfiedIcon as React.FunctionComponent<any>).displayName = "SentimentDissatisfiedIcon";
(SentimentSatisfiedIcon as React.FunctionComponent<any>).displayName = "SentimentSatisfiedIcon";
(SentimentSatisfiedAltIcon as React.FunctionComponent<any>).displayName = "SentimentSatisfiedAltIcon";
(SentimentVerySatisfiedIcon as React.FunctionComponent<any>).displayName = "SentimentVerySatisfiedIcon";
(StarIcon as React.FunctionComponent<any>).displayName = "StarIcon";
(StarBorderIcon as React.FunctionComponent<any>).displayName = "StarBorderIcon";

// Storybook meta information
export default {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description: "Current rating value.",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the rating changes.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    readOnly: {
      control: "boolean",
      description: "If `true`, the rating will be read-only.",
    },
    precision: {
      control: "number",
      description: "The precision of the rating (e.g., 0.5 for half stars).",
    },
    error: {
      control: "boolean",
      description: "Indicates whether the rating has an error.",
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the rating.",
    },
    highlightSelectedOnly: {
      control: "boolean",
      description: "If `true`, only the selected rating is highlighted.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Rating>;

// Icons and labels for satisfaction levels
const satisfactionLevels = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

// Template for the Rating component
const Template: StoryFn<typeof Rating> = (args) => (
  <FormControl fullWidth error={args.error}>
    <Rating
      name="customized-rating"
      value={args.value}
      onChange={(_, newValue) => args.onChange(newValue)}
      size={args.size}
      readOnly={args.readOnly}
      precision={args.precision}
      highlightSelectedOnly={args.highlightSelectedOnly}
      icon={<StarIcon />} // Display stars
      emptyIcon={<StarBorderIcon />} // Display empty stars
    />
    {args.helperText && <FormHelperText>{args.helperText}</FormHelperText>}
    <Typography variant="body1">
      {satisfactionLevels[args.value]?.label || 'No Rating'}
    </Typography>
    {satisfactionLevels[args.value]?.icon}
  </FormControl>
);

// Story for the basic Rating component
export const Default = Template.bind({});
Default.args = {
  value: 3,
  size: "medium",
  readOnly: false,
  precision: 1,
  highlightSelectedOnly: false,
  error: false,
  helperText: "This is a helper text.",
};

// Story for highlighting selected stars only
export const HighlightSelectedOnly = Template.bind({});
HighlightSelectedOnly.args = {
  value: 3,
  size: "medium",
  readOnly: false,
  precision: 1,
  highlightSelectedOnly: true,
  error: false,
  helperText: "This rating highlights only the selected star.",
};

// Story for a read-only rating
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 4,
  size: "medium",
  readOnly: true,
  precision: 1,
  highlightSelectedOnly: false,
  error: false,
  helperText: "You can't change this rating.",
};

// Story for error state
export const ErrorState = Template.bind({});
ErrorState.args = {
  value: null,
  size: "medium",
  readOnly: false,
  precision: 1,
  highlightSelectedOnly: false,
  error: true,
  helperText: "This field is required.",
};

// Story demonstrating half ratings
export const HalfRatings = Template.bind({});
HalfRatings.args = {
  value: 2.5,
  size: "medium",
  readOnly: false,
  precision: 0.5,
  highlightSelectedOnly: false,
  error: false,
  helperText: "You can select half ratings.",
};

// Story demonstrating different sizes
export const DifferentSizes = () => (
  <div>
    <Typography variant="h6">Small</Typography>
    <Rating value={3} size="small" onChange={() => {}} />
    <Typography variant="h6">Medium</Typography>
    <Rating value={3} size="medium" onChange={() => {}} />
    <Typography variant="h6">Large</Typography>
    <Rating value={3} size="large" onChange={() => {}} />
  </div>
);

// Story for controlled component example
export const ControlledRating = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <FormControl fullWidth>
      <Typography variant="h6">Controlled Rating</Typography>
      <Rating
        name="controlled-rating"
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      />
      <Typography variant="body1">Selected Value: {value}</Typography>
    </FormControl>
  );
};
