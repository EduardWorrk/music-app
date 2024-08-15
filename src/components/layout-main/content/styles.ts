import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SContent = styled("main")<{
  openPlayer: boolean;
}>(({ theme, openPlayer }) => ({
  background: "#121212",
  height: `calc(100vh - ${openPlayer ? 168 : 78}px)`,
  display: "grid",
  gridTemplateColumns: "1fr 32%",
}));

export const SOptions = styled(Box)(({ theme }) => ({
  overflow: "auto",
}));
