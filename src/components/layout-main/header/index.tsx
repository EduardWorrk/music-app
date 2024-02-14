import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AccountMenu from "@components/profile";
import { IconMenuLogo } from "@components/icons";
import { Box } from "@mui/material";
import { Search } from "@components/layout-main/search";
import { Link } from "react-router-dom";
import { AppBar } from "./styles";

export const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", pl: 2 }}>
              <Link to="/">
                <IconMenuLogo width={140} height={70} />
              </Link>
              <Search />
            </Box>
            <AccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
