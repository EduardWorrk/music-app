import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const StyleSearch = styled(InputBase)(({ theme }) => ({
  background: "#3A3A3A",
  width: 440,
  height: 45,
  marginLeft: theme.spacing(12),
  color: theme.palette.grey[500],

  "& input::placeholder": {
    color: "#808080",
  },
}));
