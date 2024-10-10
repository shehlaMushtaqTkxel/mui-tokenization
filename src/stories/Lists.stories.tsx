import { Meta, StoryFn } from "@storybook/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Inbox, Star, Mail, Drafts } from "@mui/icons-material";
import withThemeProvider from "./withThemeProvider";
import { styled } from "@mui/system";

(List as React.FC).displayName = "List";
(ListItem as React.FC).displayName = "ListItem";
(ListItemIcon as React.FC).displayName = "ListItemIcon";
(ListItemText as React.FC).displayName = "ListItemText";
(Divider as React.FC).displayName = "Divider";

(Inbox as React.FunctionComponent<any>).displayName = "Inbox";
(Mail as React.FunctionComponent<any>).displayName = "Mail";
(Star as React.FunctionComponent<any>).displayName = "Star";
(Drafts as React.FunctionComponent<any>).displayName = "Drafts";

const StickySubheader = styled("li")(({ theme }) => ({
  position: "sticky",
  top: 0,
  backgroundColor: theme.palette.background.paper,
  zIndex: 1,
}));

// Storybook meta information
export default {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    dense: {
      control: "boolean",
      description: "If true, compact the vertical spacing of the list.",
    },
    disablePadding: {
      control: "boolean",
      description: "If true, the list items will be padded.",
    },
    subheader: {
      control: "text",
      description: "A subheader for the list.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof List>;

// Template for the List component
const Template: StoryFn<{
  dense: boolean;
  disablePadding: boolean;
  subheader: string;
}> = (args) => (
  <List
    dense={args.dense}
    disablePadding={args.disablePadding}
    subheader={
      args.subheader ? (
        <StickySubheader>{args.subheader}</StickySubheader>
      ) : null
    }
  >
    <ListItem button>
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <Mail />
      </ListItemIcon>
      <ListItemText primary="Send email" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <Drafts />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </List>
);

// Default export for the List component
export const Default = Template.bind({});
Default.args = {
  dense: false,
  disablePadding: false,
  subheader: "My Sticky Subheader",
};

export const DenseList = Template.bind({});
DenseList.args = {
  dense: true,
  disablePadding: false,
  subheader: "Dense Sticky Subheader",
};

export const PaddedList = Template.bind({});
PaddedList.args = {
  dense: false,
  disablePadding: true,
  subheader: "Padded Sticky Subheader",
};

export const InteractiveList = () => (
  <List>
    <ListItem button>
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Mail />
      </ListItemIcon>
      <ListItemText primary="Send email" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Drafts />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </List>
);
