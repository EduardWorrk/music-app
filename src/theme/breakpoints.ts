import { createBreakpoints } from "@mui/system";

export const breakpoints = {
  values: {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

export const themeBreakpoints = createBreakpoints(breakpoints);
