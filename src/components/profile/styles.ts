import { Avatar, Box, ListItem, styled } from "@mui/material";

export const SAvatar = styled(Avatar)(({ theme }) => ({
  border: `2px solid ${theme.palette.grey[700]}`,
  background: `${theme.palette.grey[800]}`,
  cursor: "pointer",
  marginRight: 5,
}));

export const SListItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
}));

export const StyledItemList = styled(Box)<{ active?: boolean }>(
  ({ theme, active }) => ({
    position: "absolute",
    display: active ? "block" : "none",
    top: 65,
    right: 15,
    padding: theme.spacing(1),
    pb: theme.spacing(2),
    background: "#eee",
    zIndex: 2,
    borderRadius: 5,
  })
);
