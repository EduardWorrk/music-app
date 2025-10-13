import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SSlider = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
}));

export const SSliderItem = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(2),
  background: "#181818",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  
  "&:hover": {
    background: "#282828",
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
  },
}));

export const SArrowButton = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "rgba(0, 0, 0, 0.7)",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.8,
  transition: "all 0.2s ease",

  "&:hover": {
    background: "rgba(0, 0, 0, 0.9)",
    opacity: 1,
    transform: "translateY(-50%) scale(1.1)",
  },
}));

export const SArrowLeftButton = styled(SArrowButton)(() => ({
  left: 8,

  "& svg": {
    fill: "white",
    fontSize: "20px",
  },
}));

export const SArrowRightButton = styled(SArrowButton)(() => ({
  right: 8,

  "& svg": {
    fill: "white",
    fontSize: "20px",
  },
}));
