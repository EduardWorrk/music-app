import React, { FC } from "react";
import { Grid } from "@mui/material";
import { sAddIcon, SAddPlaylist, SNew } from "@components/list/styles";
import AddIcon from "@mui/icons-material/Add";
import { ListItem } from "@components/list/list-item";
import { TPlaylist } from "@store/slices/playlists";

type Props = {
  playlists: TPlaylist[];
  onCallBack: (id: number) => void;
  onCallBackCreate: (value: boolean) => void;
};

export const PlaylistList: FC<Props> = ({
  playlists,
  onCallBack,
  onCallBackCreate,
}) => {
  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item lg={3} sm={12} md={6} sx={{ minWidth: 200, minHeight: 200 }}>
        <SAddPlaylist onClick={() => onCallBackCreate(true)}>
          <SNew>
            <AddIcon {...sAddIcon} />
          </SNew>
        </SAddPlaylist>
      </Grid>

      {playlists.map((playlist) => {
        return (
          <Grid
            item
            lg={3}
            md={6}
            sm={12}
            key={playlist?.id}
            sx={{ minHeight: 204 }}
          >
            <ListItem
              id={playlist?.id || ""}
              name={playlist?.name || ""}
              active={!!playlist?.active}
              background={playlist?.background}
              onCallBack={(id) => onCallBack(id)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
