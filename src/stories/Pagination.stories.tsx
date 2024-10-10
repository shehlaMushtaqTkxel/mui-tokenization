import { Meta, StoryFn } from "@storybook/react";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import withThemeProvider from "./withThemeProvider";

(Pagination as React.ForwardRefExoticComponent<any>).displayName = "Pagination";
(PaginationItem as React.ForwardRefExoticComponent<any>).displayName = "PaginationItem";
(Stack as React.ForwardRefExoticComponent<any>).displayName = "Stack";
// Storybook meta information
export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    count: {
      control: "number",
      description: "Total number of pages.",
    },
    page: {
      control: "number",
      description: "Current page number.",
    },
    siblingCount: {
      control: "number",
      description: "Number of pages to show on each side of the current page.",
    },
    boundaryCount: {
      control: "number",
      description: "Number of pages at the beginning and end of the pagination.",
    },
    variant: {
      control: "select",
      options: ["text", "outlined"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "standard"],
      description: "Color of the pagination component.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the pagination component.",
    },
    shape: {
      control: "select",
      options: ["rounded", "circular"],
      description: "Shape of the pagination items.",
    },
    disabled: {
      control: "boolean",
      description: "Disable the pagination component.",
    },
    hideNextButton: {
      control: "boolean",
      description: "Hide the next button.",
    },
    hidePrevButton: {
      control: "boolean",
      description: "Hide the previous button.",
    },
    onChange: { action: "page changed" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Pagination>;

// Template for the Pagination component
const Template: StoryFn<typeof Pagination> = (args) => (
  <Stack spacing={2}>
    <Pagination
      count={args.count}
      page={args.page}
      siblingCount={args.siblingCount}
      boundaryCount={args.boundaryCount}
      variant={args.variant}
      color={args.color}
      size={args.size}
      shape={args.shape}
      disabled={args.disabled}
      hideNextButton={args.hideNextButton}
      hidePrevButton={args.hidePrevButton}
      onChange={args.onChange}
    />
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  count: 10,
  page: 1,
  siblingCount: 1,
  boundaryCount: 1,
  variant: "text",
  color: "primary",
  size: "medium",
  shape: "rounded",
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
};

// Example: Pagination with Siblings and Boundaries
export const WithSiblingsAndBoundaries = Template.bind({});
WithSiblingsAndBoundaries.args = {
  count: 11,
  page: 6,
  siblingCount: 1,
  boundaryCount: 2,
  variant: "outlined",
  color: "primary",
  size: "medium",
  shape: "rounded",
};

// Example: Pagination Sizes
export const PaginationSizes = () => (
  <Stack spacing={2}>
    <Pagination count={10} size="small" />
    <Pagination count={10} size="medium" />
    <Pagination count={10} size="large" />
  </Stack>
);

// Example: Pagination Buttons Hidden
export const PaginationButtonsHidden = Template.bind({});
PaginationButtonsHidden.args = {
  count: 10,
  page: 1,
  hideNextButton: true,
  hidePrevButton: true,
  variant: "text",
  color: "primary",
  size: "medium",
  shape: "rounded",
};

// Example: Pagination with Different Variants
export const PaginationVariants = () => (
  <Stack spacing={2}>
    <Pagination count={10} variant="text" />
    <Pagination count={10} variant="outlined" />
  </Stack>
);

// Example: Pagination with Icons
export const PaginationWithIcons = () => (
  <Pagination
    count={10}
    renderItem={(item) => (
      <PaginationItem
        components={{ previous: () => <span>◄</span>, next: () => <span>►</span> }}
        {...item}
      />
    )}
  />
);

// Example: Disabled Pagination
export const DisabledPagination = Template.bind({});
DisabledPagination.args = {
  count: 10,
  page: 1,
  variant: "outlined",
  disabled: true,
  size: "medium",
  shape: "rounded",
};

// Example: Pagination with Controlled State
export const ControlledPagination = Template.bind({});
ControlledPagination.args = {
  count: 10,
  page: 3,
  variant: "outlined",
  color: "primary",
  size: "medium",
  shape: "rounded",
};
ControlledPagination.argTypes = {
  onChange: { action: "page changed" },
};
