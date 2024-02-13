import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

export const SListTrack = styled(Box)(({ theme }) => ({
  background: "#1E1E1E",
  borderRadius: 3,
  width: "100%",
}));

export const STextAuthor = styled(Link)(({ theme }) => ({
  fontSize: 12,
  textDecoration: "none",
  color: theme.palette.grey[700],
}));

export const STitleTrack = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.grey[300],
  },
}));

export const STrack = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(1),
  border: "2px solid  #1E1E1E",
  transition: "200ms all linear",
  "&:hover": {
    border: `2px solid  ${theme.palette.primary.main}`,
  },
}));

export const SPlay = styled(Box)(({ theme }) => ({
  background: "#1E1E1E",
  borderRadius: 50,
  padding: "5px",
  marginRight: "10px",
  width: "26px",
  height: "26px",
  border: `1px solid ${theme.palette.grey[800]}`,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "26px",
}));