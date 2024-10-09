import { Meta, StoryFn } from "@storybook/react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import withThemeProvider from "./withThemeProvider";
import React from "react";

// Display name for the Accordion component
(Accordion as React.FC).displayName = "Accordion";

// Storybook meta information
export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    expanded: {
      control: "boolean",
      description: "If true, the accordion is expanded.",
    },
    disableGutters: {
      control: "boolean",
      description: "If true, the spacing is removed.",
    },
    square: {
      control: "boolean",
      description: "If true, rounded corners are disabled.",
    },
    onChange: {
      action: "changed",
      description: "Triggered when the accordion's expanded state changes.",
    },
  },
  decorators: [withThemeProvider],
} as Meta<typeof Accordion>;

// Template for the Accordion component
const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion
    expanded={args.expanded}
    disableGutters={args.disableGutters}
    square={args.square}
    onChange={args.onChange ? (event, newExpanded) => args.onChange(newExpanded) : undefined}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
      <Typography>Accordion Title</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This is the content of the accordion. You can put any content here, including text, images, or other components.
      </Typography>
    </AccordionDetails>
  </Accordion>
);

// Default story for the Accordion component
export const Default = Template.bind({});
Default.args = {
  expanded: false,
  disableGutters: false,
  square: false,
};

// Expanded story for the Accordion component
export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
  disableGutters: false,
  square: false,
};

// Multiple Accordions story
export const MultipleAccordions = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>Panel 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Panel 1.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography>Panel 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Panel 2.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography>Panel 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for Panel 3.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
