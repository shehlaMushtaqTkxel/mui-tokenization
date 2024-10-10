import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Sample options
const options = ['Option 1', 'Option 2', 'Option 3'];
(TextField as React.FC).displayName = "TextField";
(Autocomplete as React.FC).displayName = "Autocomplete";
// Default export for Storybook
export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ["autodocs"],
};

// Theme provider
const theme = createTheme();

// Template for rendering Autocomplete
const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Autocomplete
      {...args}
      options={options}
      renderInput={(params) => <TextField {...params} label="Select an option" variant="outlined" />}
    />
  </ThemeProvider>
);

// Default autocomplete
export const Default = Template.bind({});
Default.args = {};

// Free solo input
export const FreeSolo = Template.bind({});
FreeSolo.args = {
  freeSolo: true,
};

// Multiple selections
export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

// Loading state
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  options: [], // No options to show while loading
  renderInput: (params) => (
    <TextField {...params} label="Loading options" variant="outlined" />
  ),
};

// Custom render option
export const CustomRenderOption = Template.bind({});
CustomRenderOption.args = {
  renderOption: (props, option) => <li {...props}>{option}</li>,
};

// Clearable option
export const Clearable = Template.bind({});
Clearable.args = {
  disableClearable: false,
};

// Customizing getOptionLabel
export const CustomGetOptionLabel = Template.bind({});
CustomGetOptionLabel.args = {
  getOptionLabel: (option) => `${option} (custom)`,
};

// Handling change
export const HandleChange = Template.bind({});
HandleChange.args = {
  onChange: (event, value) => {
    console.log('Selected value:', value);
  },
  renderInput: (params) => <TextField {...params} label="Select an option" variant="outlined" />,
};

// Grouped options
export const GroupedOptions = Template.bind({});
GroupedOptions.args = {
  options: [
    { title: 'Group 1', options: ['Option 1', 'Option 2'] },
    { title: 'Group 2', options: ['Option 3', 'Option 4'] },
  ],
  groupBy: (option) => option.title, // Grouping function
  renderInput: (params) => <TextField {...params} label="Grouped options" variant="outlined" />,
};

// Customizing Paper component
export const CustomPaper = Template.bind({});
CustomPaper.args = {
  PaperComponent: (props) => (
    <div {...props} style={{ background: 'lightgray', border: '1px solid #ccc', borderRadius: '4px' }} />
  ),
};
