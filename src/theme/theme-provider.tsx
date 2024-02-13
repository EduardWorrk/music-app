import {
  createTheme,
  CssBaseline,
  Palette,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
import { breakpoints } from "./breakpoints";
import { themeComponents } from "./components";

import { transitions } from "./transitions";
import { typography } from "./typography";
import { brandPalette } from "./palette";

const theme = createTheme({
  palette: brandPalette,
  breakpoints,
  typography,
  components: themeComponents(brandPalette as Palette),
  transitions,
});

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
