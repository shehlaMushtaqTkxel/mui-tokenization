import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/vXY3MZXoE38VAgppMEihtX/Catalyst-DS?node-id=0-1&node-type=canvas&t=fwpJ1mEoRpSGU3ej-0", // Ensure this is a valid link
    },
    docs: {
      
    },
  },
};

export default preview;
