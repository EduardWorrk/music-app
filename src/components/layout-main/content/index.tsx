import React, { ReactNode } from "react";
import { SContent, SOptions } from "@components/layout-main/content/styles";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { PlayerDataAlbum } from "@components/player-data/album";
import { PlayerDataPlaylist } from "@components/player-data/playlist";

type Props = {
  children: ReactNode;
  fullScreen: boolean;
};

export const Content: React.FC<Props> = ({ children, fullScreen }) => {
  const { album } = useSelector((state: RootState) => state.album);
  const { openPlaylist } = useSelector((state: RootState) => state.playlists);

  return (
    <SContent fullScreen={fullScreen}>
      <Box
        className="scroll"
        sx={{ padding: (theme) => theme.spacing(3), overflowX: "auto" }}
      >
        {children}
      </Box>

      <SOptions>
        {album && <PlayerDataAlbum />}

        {openPlaylist && <PlayerDataPlaylist />}
      </SOptions>
    </SContent>
  );
};
