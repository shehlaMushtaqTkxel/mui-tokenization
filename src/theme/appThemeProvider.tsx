import React from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "."; // Path to your custom theme

type Props = {
  children: any;
};
// Higher-Order Component that wraps a component with the ThemeProvider
const AppThemeProvider = ({ children }: Props) => {
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
