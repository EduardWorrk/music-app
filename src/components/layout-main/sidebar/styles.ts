import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

export const drawerWidth = 280;
export const StyledDrawer = styled(
  Drawer,
  {}
)(({ theme }) => ({
  width: drawerWidth,
  "& .MuiDrawer-paper": {
    background: "#1E1E1E",
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette.grey[800]}`,
  },
}));
