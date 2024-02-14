import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const WrapLoading = styled(Box)<{ size: number }>(({ theme, size }) => ({
  display: "flex",
  justifyContent: "center",
  padding: size,
}));
