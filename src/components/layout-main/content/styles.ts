import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SContent = styled("main")<{ fullScreen: boolean }>(
  ({ theme, fullScreen }) => ({
    background: "#121212",
    // height: fullScreen ? "calc(100vh - 90px)" : "100vh",
    height: "calc(100vh - 78px)",
    display: "grid",
    gridTemplateColumns: "1fr 32%",
  })
);

export const SOptions = styled(Box)(({ theme }) => ({
  overflow: "auto",
}));
