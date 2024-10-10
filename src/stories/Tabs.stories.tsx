import { Meta, StoryFn } from "@storybook/react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import { useState } from "react";

// Storybook meta information
(Tabs as React.ForwardRefExoticComponent<any>).displayName = "Tabs";
(Tab as React.ForwardRefExoticComponent<any>).displayName = "Tab";
(Box as React.ForwardRefExoticComponent<any>).displayName = "Box";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "scrollable", "fullWidth"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    textColor: {
      control: "select",
      options: ["secondary", "primary", "inherit"],
    },
    indicatorColor: {
      control: "select",
      options: ["secondary", "primary"],
    },
    centered: {
      control: "boolean",
      description: "Centers the tabs when horizontal.",
    },
    scrollButtons: {
      control: "select",
      options: ["auto", "desktop", "on", "off"],
    },
    allowScrollButtonsMobile: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Tabs>;

// Template for the Tabs component
const Template: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    args.onChange?.(event, newValue); // Triggers action logger
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={args.variant}
        textColor={args.textColor}
        indicatorColor={args.indicatorColor}
        orientation={args.orientation}
        centered={args.centered}
        scrollButtons={args.scrollButtons}
        allowScrollButtonsMobile={args.allowScrollButtonsMobile}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography>Item One Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two Content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three Content</Typography>
      </TabPanel>
    </Box>
  );
};

// Utility component for rendering TabPanel
function TabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  variant: "standard",
  textColor: "primary",
  indicatorColor: "primary",
  orientation: "horizontal",
  centered: false,
  scrollButtons: "auto",
  allowScrollButtonsMobile: false,
};

export const CenteredTabs = Template.bind({});
CenteredTabs.args = {
  ...Default.args,
  centered: true,
};

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
  variant: "scrollable",
  scrollButtons: "auto",
  allowScrollButtonsMobile: true,
};

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  variant: "standard",
  orientation: "vertical",
};

// Example with Scrollable Tabs
export const ScrollableTabsWithAllProps = Template.bind({});
ScrollableTabsWithAllProps.args = {
  variant: "scrollable",
  textColor: "primary",
  indicatorColor: "secondary",
  scrollButtons: "on",
  allowScrollButtonsMobile: true,
  orientation: "horizontal",
};
