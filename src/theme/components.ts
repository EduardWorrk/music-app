import { Components, Palette } from "@mui/material";
import { typography } from "./typography";

export const themeComponents = (palette: Palette): Components => ({
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        border: "1px solid",
        borderRadius: "12px",
        borderColor: palette.grey[400],
        color: palette.grey[900],
        backgroundColor: `${palette.grey[300]}`,
        button: {
          height: "40px",
          padding: "8px 20px",
          borderRadius: "inherit !important",
          border: "none",
          textTransform: "none",
          lineHeight: "1.6em",
          fontSize: "16px",
          fontWeight: 400,
          color: "inherit",
          backgroundColor: "inherit",
          "&:hover, &:active": {
            backgroundColor: "inherit",
          },
        },
        ".Mui-selected": {
          position: "relative",
          zIndex: 1,
          pointerEvents: "none",
          boxShadow: `0 0 2px rgba(0, 0, 0, 0.2)`,
          backgroundColor: `${palette.common.white} !important`,
          color: "inherit !important",
        },
        ".MuiBadge-root": {
          marginLeft: "18px",
          backgroundColor: "#266FED",
          ".MuiBadge-badge": {
            minWidth: "24px",
            height: "24px",
            fontSize: "14px",
            fontWeight: 400,
            borderRadius: "12px",
          },
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        margin: 0,
        padding: "12px 16px",
        border: `1px solid ${palette.primary.xLight}`,
        borderRadius: 12,
        fontSize: 18,
        color: `${palette.primary.dark}`,
        "&.selected": {
          backgroundColor: `${palette.primary.light}`,
        },
        "& + &": {
          marginTop: "16px",
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {},
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        "&.select-paper": {
          padding: 0,
          borderRadius: "8px",
          boxShadow: "0 0 32px rgba(125, 148, 193, 0.24)",
          ul: {
            paddingTop: "4px",
            paddingBottom: "4px",
          },
          li: {
            margin: "4px",
          },
        },
      },
    },
  },
  MuiTableCell: {
    defaultProps: {
      padding: "none",
    },
    styleOverrides: {
      root: {
        flexDirection: "row",
      },
    },
  },
  MuiTableSortLabel: {
    styleOverrides: {
      root: {
        lineHeight: "22px",
      },
      iconDirectionAsc: {
        transform: "none",
      },
      iconDirectionDesc: {
        transform: "none",
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      spacer: {
        flex: "none",
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true,
    },
    styleOverrides: {
      root: () => ({
        position: "static",
        paddingBottom: "8px",
        transform: "none",
        ...typography.caption,
        color: palette.grey[900],
        "&:not(.Mui-error).Mui-focused": {
          color: palette.grey[900],
        },
      }),
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      notched: false,
    },
    styleOverrides: {
      root: () => ({
        borderRadius: "8px",
        backgroundColor: palette.common.white,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.grey[500],
        },
        "&:not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: palette.grey[500],
          },
        "&:not(.Mui-error):not(.Mui-error).Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: palette.grey[700],
          },
        "&.Mui-disabled": {
          backgroundColor: palette.grey[300],
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
        },
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        input: {
          padding: "10.5px 12px",
        },
        fontSize: "16px",
        lineHeight: "24px",
      },
      sizeSmall: {
        input: {
          padding: "8px 12px",
        },
        fontSize: "14px",
        lineHeight: "19.6px",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        padding: "10.5px 12px",
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      variant: "contained",
      color: "primary",
    },
    styleOverrides: {
      root: () => ({
        boxShadow: "none",
        textTransform: "none",
        borderRadius: 12,
        fontWeight: 400,
        ":hover": {
          boxShadow: "none",
        },
        ":disabled": {
          backgroundColor: palette.grey[300],
          color: palette.grey[500],
          borderColor: palette.grey[500],
          border: "1px solid",
        },
      }),
    },
    variants: [
      {
        props: { variant: "outlined", color: "primary" },
        style: () => ({
          color: palette.primary.dark,
          borderColor: palette.grey[400],
          ":hover": {
            backgroundColor: palette.common.white,
            borderColor: palette.grey[700],
          },
        }),
      },
      {
        props: { variant: "text", color: "primary" },
        style: () => ({
          color: palette.grey[800],
          ":hover": {
            backgroundColor: palette.grey[300],
          },
        }),
      },
      {
        props: { color: "success" },
        style: () => ({
          color: palette.common.white,
          borderColor: palette.grey[500],
          backgroundColor: palette.success.main,
        }),
      },
      {
        props: { size: "small" },
        style: {
          padding: "8px 20px",
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
      {
        props: { size: "medium" },
        style: {
          padding: "10px 22px",
          fontSize: "16px",
          lineHeight: "24px",
          // borderRadius: '8px',
        },
      },
      {
        props: { size: "large" },
        style: {
          padding: "16px 28px",
          fontSize: "18px",
          lineHeight: "24px",
        },
      },
    ],
  },

  MuiSwitch: {
    styleOverrides: {
      root: () => ({
        width: 40,
        height: 24,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 3,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              backgroundColor: palette.primary,
              opacity: 1,
            },
          },
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: 17,
          height: 17,
        },
        "& .MuiSwitch-track": {
          borderRadius: 32,
          backgroundColor: "rgba(0,0,0,.25)",
        },
      }),
    },
  },
});
