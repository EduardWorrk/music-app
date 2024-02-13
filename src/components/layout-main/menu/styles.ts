import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";

export const styleIconMenu = {
  sx: { width: "25px", height: "25px", color: "white" },
};

export const SListItemText = styled(
  ListItemText,
  {}
)(({ theme }) => ({
  "&.active": {
    fontWeight: "500",
    color: "white",
  },
}));
