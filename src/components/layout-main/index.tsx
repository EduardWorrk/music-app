import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

import { Header } from "@components/layout-main/header";
import { Content } from "@components/layout-main/content";
import { Player } from "@components/player";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { Stack } from "@mui/material";
import { setUser } from "@store/slices/user";

type Props = {
  children: ReactNode;
};

export const LayoutMain: React.FC<Props> = ({ children }) => {
  const { options } = useSelector((state: RootState) => state.player);

  const dispatch = useDispatch();

  dispatch(
    setUser({
      id: null,
      userName: null,
      preference: "",
      session: {
        sessionId: "",
        userAgent: navigator.userAgent,
      },
    })
  );

  return (
    <Stack
      sx={{
        maxWidth: 1440,
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
      direction="column"
    >
      <Box>
        <Header />
        <Content fullScreen={!!options.id}>{children}</Content>
      </Box>

      {options.id && <Player />}
    </Stack>
  );
};
