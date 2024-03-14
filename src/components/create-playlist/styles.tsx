import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StylesCreatePlaylist = styled(
  Box,
  {}
)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: 10,
}));

export const StylesButton = styled(Box)(({ theme }) => ({
  borderRadius: 3,
  textAlign: "center",
  cursor: "pointer",
  color: theme.palette.grey[600],
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.grey[600]}`,
  fontSize: 14,
}));
