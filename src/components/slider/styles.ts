import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SSlider = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
}));

export const SSliderItem = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  border: "2px solid #121212",
  padding: theme.spacing(1),
  pb: theme.spacing(2),
  background: "#1E1E1E",
  borderRadius: 5,

  "&:hover": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

export const SArrowButton = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: theme.palette.grey[900],
  position: "absolute",
  top: "43%",
  border: `2px solid ${theme.palette.grey[500]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.6,

  "&:hover": {
    background: theme.palette.grey[800],
  },
}));

export const SArrowLeftButton = styled(SArrowButton)(() => ({
  left: 5,

  "& svg": {
    fill: "white",
  },
}));

export const SArrowRightButton = styled(SArrowButton)(() => ({
  right: 5,

  "& svg": {
    fill: "white",
  },
}));
