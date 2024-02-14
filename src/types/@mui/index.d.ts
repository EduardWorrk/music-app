import React from "react";
import {
  SimplePaletteColorOptions as MuiSimplePaletteColorOptions,
  PaletteColor as MuiPaletteColor,
  Palette as MuiPalette,
} from "@mui/material/styles";
import "@mui/material/Typography";
import {
  PaletteColorOptions,
  TypeBackground as MuiTypeBackground,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/Button" {
  interface ButtonPropsOverrides {
    red: true;
  }
}

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions extends MuiSimplePaletteColorOptions {
    xLight?: string;
  }

  interface TypeBackground extends MuiTypeBackground {
    special?: string;
  }

  interface PaletteColor extends MuiPaletteColor {
    xLight: string;
    contrastText?: string;
  }

  interface Palette extends MuiPalette {
    yellow: PaletteColor;
    violet: PaletteColor;
    brown: PaletteColor;
    extra: {
      hoverTable?: string;
      breakBorder?: string;
      breakBorderLight?: string;
    };
  }

  interface PaletteOptions {
    yellow?: PaletteColorOptions;
    violet?: PaletteColorOptions;
    brown?: PaletteColorOptions;
    extra: {
      hoverTable?: string;
      breakBorder?: string;
      breakBorderLight?: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body?: React.CSSProperties;
    p?: React.CSSProperties;
    notice?: React.CSSProperties;
    h1Title?: React.CSSProperties;
    h4DemiBold?: React.CSSProperties;
    captionInput?: React.CSSProperties;
    captionTitle?: React.CSSProperties;
    tableNormal?: React.CSSProperties;
    tableBold?: React.CSSProperties;
    fontSizeBase?: string;
    fontSizeSmall?: string;
  }
  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    p?: React.CSSProperties;
    notice?: React.CSSProperties;
    h1Title?: React.CSSProperties;
    h4DemiBold?: React.CSSProperties;
    captionInput?: React.CSSProperties;
    captionTitle?: React.CSSProperties;
    tableNormal?: React.CSSProperties;
    tableBold?: React.CSSProperties;
    fontSizeBase?: string;
    fontSizeSmall?: string;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body?: true;
    p?: true;
    notice?: true;
    h1Title?: true;
    h4DemiBold?: true;
    captionInput?: true;
    captionTitle?: true;
    tableNormal?: true;
    tableBold?: true;
    fontSizeBase?: true;
    fontSizeSmall?: true;
  }
}
