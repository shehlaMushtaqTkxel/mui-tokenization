import { Meta, StoryFn } from "@storybook/react";
import { Menu, MenuItem, Button, Divider, ListItemIcon, Typography, IconButton } from "@mui/material";
import { ContentCut, ContentCopy, ContentPaste, Cloud } from '@mui/icons-material';
import { useState, MouseEvent } from "react";
import withThemeProvider from "./withThemeProvider";

// Meta information for Storybook
(Menu as React.ForwardRefExoticComponent<any>).displayName = "Menu";
(MenuItem as React.ForwardRefExoticComponent<any>).displayName = "MenuItem";
(Button as React.ForwardRefExoticComponent<any>).displayName = "Button";
(Divider as React.ForwardRefExoticComponent<any>).displayName = "Divider";
(ListItemIcon as React.ForwardRefExoticComponent<any>).displayName = "ListItemIcon";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
(IconButton as React.ForwardRefExoticComponent<any>).displayName = "IconButton";

export default {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the menu is open.",
    },
    anchorEl: {
      control: false, // We don't need to control this manually in the Storybook UI
    },
    variant: {
      control: "select",
      options: ["menu", "selectedMenu"],
      description: "Menu variant can be either 'menu' or 'selectedMenu'.",
    },
    onClose: {
      action: "closed",
      description: "Callback fired when the menu is closed.",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when a menu item is clicked.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Menu>;

// Template for the basic Menu component
const Template: StoryFn<typeof Menu> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={args.open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={args.open ? "true" : undefined}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

// Story for the Default Menu example
export const Default = Template.bind({});
Default.args = {
  open: false,
};

// Template for the Dense Menu variant (dense prop example)
const DenseTemplate: StoryFn<typeof Menu> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={args.open ? "dense-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={args.open ? "true" : undefined}
        onClick={handleClick}
      >
        Open Dense Menu
      </Button>
      <Menu
        id="dense-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dense-button",
          dense: true,
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

// Story for Dense Menu example
export const Dense = DenseTemplate.bind({});
Dense.args = {
  open: false,
};

// Template for the Menu with icons and dividers
const IconsTemplate: StoryFn<typeof Menu> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={args.open ? "icons-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={args.open ? "true" : undefined}
        onClick={handleClick}
      >
        Open Menu with Icons
      </Button>
      <Menu
        id="icons-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "icons-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          Cut
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          Copy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          Paste
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          Web Clipboard
        </MenuItem>
      </Menu>
    </div>
  );
};

// Story for the Menu with icons and dividers example
export const WithIconsAndDividers = IconsTemplate.bind({});
WithIconsAndDividers.args = {
  open: false,
};

// Template for the Menu with a disabled item
const DisabledItemTemplate: StoryFn<typeof Menu> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={args.open ? "disabled-item-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={args.open ? "true" : undefined}
        onClick={handleClick}
      >
        Open Menu with Disabled Item
      </Button>
      <Menu
        id="disabled-item-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "disabled-item-button",
        }}
      >
        <MenuItem disabled>Disabled</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  );
};

// Story for the Menu with a disabled item example
export const WithDisabledItem = DisabledItemTemplate.bind({});
WithDisabledItem.args = {
  open: false,
};
