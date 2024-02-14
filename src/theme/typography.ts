import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: ["Inter, Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  fontSize: 16,
  h1: {
    fontStyle: "normal",
    fontSize: "32px",
    lineHeight: "1.3em",
    fontWeight: 500,
  },
  h2: {
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "1.2em",
    fontWeight: 500,
  },
  h3: {
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 500,
  },
  h4: {
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "140%",
    fontWeight: 500,
  },
  h4DemiBold: {
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "140%",
    fontWeight: 600,
  },
  h5: {
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "24px",
  },
  h6: {
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "20px",
  },
  body: {
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "140%",
  },
  p: {
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
  },
  caption: {
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "140%",
  },
  captionTitle: {
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "140%",
    fontWeight: 500,
  },
  captionInput: {
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "140%",
  },
  tableNormal: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  tableBold: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
  },
  notice: {
    fontFamily: "Roboto Mono, monospace",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "21px",
  },
};
