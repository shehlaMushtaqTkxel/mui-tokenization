import { Meta, StoryFn } from "@storybook/react";
import { Breadcrumbs, Link, Typography, IconButton } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import withThemeProvider from "./withThemeProvider";

(Breadcrumbs as React.ForwardRefExoticComponent<any>).displayName = "Breadcrumbs";
(Link as React.ForwardRefExoticComponent<any>).displayName = "Link";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
(IconButton as React.ForwardRefExoticComponent<any>).displayName = "IconButton";
// Storybook meta information
export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    separator: {
      control: "text",
      description: "Custom separator for the breadcrumb items.",
      defaultValue: "/",
    },
    maxItems: {
      control: { type: "number", min: 1, max: 10 },
      description: "The maximum number of breadcrumbs to display before collapsing.",
    },
    itemsAfterCollapse: {
      control: { type: "number", min: 0, max: 5 },
      description: "The number of items to show after the ellipsis.",
    },
    itemsBeforeCollapse: {
      control: { type: "number", min: 0, max: 5 },
      description: "The number of items to show before the ellipsis.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Breadcrumbs>;

// Template for the Breadcrumbs component
const Template: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Link color="inherit" href="#">
      Home
    </Link>
    <Link color="inherit" href="#">
      Category
    </Link>
    <Link color="inherit" href="#">
      Subcategory
    </Link>
    <Typography color="text.primary">Item</Typography>
  </Breadcrumbs>
);

// Default Example
export const Default = Template.bind({});
Default.args = {
  separator: "/",
};

// Custom Separator Example
export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: <NavigateNextIcon fontSize="small" />,
};

// Collapsed Breadcrumbs Example
export const Collapsed = Template.bind({});
Collapsed.args = {
  maxItems: 2,
  itemsBeforeCollapse: 2,
  itemsAfterCollapse: 1,
};

// Breadcrumbs with Icons Example
const IconTemplate: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Link color="inherit" href="#" aria-label="Home">
      <IconButton size="small">
        <HomeIcon />
      </IconButton>
      Home
    </Link>
    <Link color="inherit" href="#">
      Category
    </Link>
    <Link color="inherit" href="#">
      Subcategory
    </Link>
    <Typography color="text.primary">Item</Typography>
  </Breadcrumbs>
);

export const WithIcons = IconTemplate.bind({});
WithIcons.args = {
  separator: "/",
};

// Breadcrumbs with Max Items Example
export const MaxItems = Template.bind({});
MaxItems.args = {
  maxItems: 2,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
};

// Breadcrumbs with Collapsed Items and Icons
export const CollapsedWithIcons = IconTemplate.bind({});
CollapsedWithIcons.args = {
  maxItems: 3,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
  separator: <NavigateNextIcon fontSize="small" />,
};
