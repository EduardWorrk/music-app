import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { Header } from "@components/layout-main/header";
import { Sidebar } from "@components/layout-main/sidebar";
import { Content } from "@components/layout-main/content";
import { Player } from "@components/player";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { Stack } from "@mui/material";

export type AppBarProps = MuiAppBarProps & {
  open?: boolean;
};

type Props = {
  children: ReactNode;
};

export const LayoutMain: React.FC<Props> = ({ children }) => {
  const { options } = useSelector((state: RootState) => state.player);
  return (
    <Stack direction="column">
      <Box>
        <Header />

        <Sidebar />

        <Content fullScreen={!!options.id}>{children}</Content>
      </Box>

      {options.id && <Player />}
    </Stack>
  );
};
