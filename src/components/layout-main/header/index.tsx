import React from "react";
import { IconMenuLogo } from "@components/icons";
import { Box, Stack } from "@mui/material";
import { Search } from "@components/layout-main/search";
import { Link } from "react-router-dom";
import { Menu } from "@components/layout-main/menu";
import { CreatePlaylist } from "@components/create-playlist";
import { SHeader } from "@components/layout-main/header/styles";
import { AccountMenu } from "@components/profile";

export const Header = () => {
  return (
    <SHeader>
      <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
        <Link to="/">
          <IconMenuLogo width={140} height={70} />
        </Link>
        <Stack pl={3} spacing={4} direction="row" alignItems="center">
          <Search />
          <Menu />
          <CreatePlaylist />
        </Stack>
      </Box>
      <AccountMenu />
    </SHeader>
  );
};
