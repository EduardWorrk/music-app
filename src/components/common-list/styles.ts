import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const sAddIcon = { sx: { width: 50, height: 50, color: "white" } };
export const SNew = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[700],
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SAlbum = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  borderRadius: 5,
  overflow: "hidden",
}));

export const StyledItemList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  pb: theme.spacing(2),
  background: "#1E1E1E",
  borderRadius: 5,
  border: "2px solid #1E1E1E",
  "&:hover": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));
