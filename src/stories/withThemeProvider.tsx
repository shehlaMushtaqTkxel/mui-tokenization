import React from "react";
import AppThemeProvider from "../theme/appThemeProvider";

const withThemeProvider = (Story: any) => {
  return (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  );
};

export default withThemeProvider;
