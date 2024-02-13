import { FC } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { useGetSimilarTracks } from "@queries/tracks";

export const PlayerDataSimilarTrack: FC = () => {
  const { options } = useSelector((state: RootState) => state.player);

  const { data } = useGetSimilarTracks({ id: +options.id });

  console.log(data);

  return <Box>s453</Box>;
};
