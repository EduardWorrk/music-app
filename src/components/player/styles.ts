import { styled } from "@mui/material/styles";
import { Box, Slider } from "@mui/material";

export const SPlayer = styled(Box)(({ theme }) => ({
  background: "#1E1E1E",
  display: "grid",
  padding: "0 0 15px 0",
  gridTemplateRows: "50% 50%",
  gridTemplateColumns: "auto",
  height: "90px",
  width: "100%",
  zIndex: 1201,
}));
export const SOpenVolume = styled(Box)<{ open: boolean }>(
  ({ theme, open }) => ({
    position: "relative",
    visibility: open ? "visible" : "hidden",
  })
);

export const SSliderVolume = styled(Slider)(({ theme }) => ({
  color: theme.palette.grey[100],
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 14,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: theme.palette.grey[800],
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
}));

export const SModalStyle = styled(Box)(({ theme }) => ({
  width: "140px",
  position: "absolute",
  padding: "10px 20px 5px 20px",
  bottom: 40,
  borderRadius: 5,
  left: "-50px",
  background: theme.palette.grey[800],
}));

export const SProgressBar = styled(Box)<{ progress: number }>(
  ({ theme, progress }) => ({
    width: `${progress}px`,
    height: "100%",
    transition: "all 300ms linear",
    background: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    left: 0,
  })
);

export const SWrapProgressBar = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "16px",
  background: "#ccc",
  position: "relative",
  cursor: "pointer",
  padding: 0,
  margin: "0!important",
}));

export const CurrentTime = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 10,
  top: -2,
  zIndex: 1202,
  padding: 0,
  fontSize: 12,
}));

export const DurationTime = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 10,
  top: -2,
  zIndex: 1202,
  padding: 0,
  fontSize: 12,
}));
