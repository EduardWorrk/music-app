import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const STrendCard = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(2),
  background: "#181818",
  borderRadius: "8px",
  transition: "all 0.3s ease",

  "&:hover": {
    background: "#282828",
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
  },
}));

