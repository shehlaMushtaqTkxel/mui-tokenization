import React from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import useResponsiveTheme from ".";

// Higher-Order Component that wraps a component with the ThemeProvider
const AppThemeProvider = ({ children }: any) => {
  const theme = useResponsiveTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
