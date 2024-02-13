import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SContent = styled("main")<{ fullScreen: boolean }>(
  ({ theme, fullScreen }) => ({
    padding: theme.spacing(8, 0, 0, 35),
    background: "#121212",
    borderLeft: `1px solid ${theme.palette.grey[800]}`,
    height: fullScreen ? "calc(100vh - 90px)" : "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 32%",
  })
);

export const SOptions = styled(Box)(({ theme }) => ({
  overflow: "auto",
}));
