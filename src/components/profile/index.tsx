import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import { SAvatar, SListItem, StyledItemList } from "@components/profile/styles";
import { ClickAwayListener, List, ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export const AccountMenu = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("Authorization");
    navigate("/auth/login");
  };

  const handleClick = () => setOpen((prev) => !prev);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box display="flex" alignItems="center">
        <SAvatar onClick={handleClick} sx={{ width: 35, height: 35 }} />
        <StyledItemList active={open}>
          <List>
            <SListItem onClick={logout}>
              <ListItemText secondary="Выйти" />
            </SListItem>
          </List>
        </StyledItemList>
      </Box>
    </ClickAwayListener>
  );
};
