import { Meta, StoryFn } from "@storybook/react";
import { Slider, Typography } from "@mui/material";
import withThemeProvider from "./withThemeProvider";
import { useState } from "react";

(Slider as React.ForwardRefExoticComponent<any>).displayName = "Slider";
(Typography as React.ForwardRefExoticComponent<any>).displayName = "Typography";
// Storybook meta information
export default {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "number",
      description: "Initial value of the slider",
    },
    min: {
      control: "number",
      description: "Minimum value of the slider",
    },
    max: {
      control: "number",
      description: "Maximum value of the slider",
    },
    step: {
      control: "number",
      description: "Step size for the slider",
    },
    disabled: {
      control: "boolean",
      description: "Disables the slider if set to true",
    },
    marks: {
      control: "boolean",
      description: "Display marks on the slider",
    },
    onChange: { action: "changed" },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Slider>;

// Template for the Slider component
const Template: StoryFn<typeof Slider> = (args) => {
  const [value, setValue] = useState(args.defaultValue || 0); // Initialize state

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number); // Update state with new value
    args.onChange && args.onChange(newValue); // Call the onChange action
  };

  return (
    <div style={{ width: 300 }}>
      <Typography gutterBottom>Slider Example</Typography>
      <Slider
        value={value} // Controlled value
        min={args.min}
        max={args.max}
        step={args.step}
        disabled={args.disabled}
        marks={args.marks ? [{ value: args.min, label: args.min }, { value: args.max, label: args.max }] : []}
        onChange={handleChange} // Handle change event
      />
      <Typography>Current Value: {value}</Typography> {/* Display current value */}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: 30,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  marks: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
  step: 1,
  disabled: true,
  marks: false,
};

export const WithMarks = Template.bind({});
WithMarks.args = {
  defaultValue: 70,
  min: 0,
  max: 100,
  step: 10,
  disabled: false,
  marks: true,
};
