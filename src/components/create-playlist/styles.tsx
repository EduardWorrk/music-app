import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StylesCreatePlaylist = styled(
  Box,
  {}
)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(3),
  borderRadius: 10,
}));

export const StylesButton = styled(Box)(({ theme }) => ({
  borderRadius: 3,
  textAlign: "center",
  cursor: "pointer",
  color: "white",
  padding: theme.spacing(0.5),
  border: `1px solid ${theme.palette.grey[700]}`,
  fontSize: 14,
}));
