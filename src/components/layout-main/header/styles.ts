import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps } from "@components/layout-main";

export const AppBar = styled(
  MuiAppBar,
  {}
)<AppBarProps>(({ theme }) => ({
  background: "#2A2A2A",
  borderBottom: `1px solid ${theme.palette.grey[800]}`,
}));
