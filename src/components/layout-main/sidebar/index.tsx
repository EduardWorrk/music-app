import { FC } from "react";
import { Menu } from "@components/layout-main/menu";
import { CreatePlaylist } from "@components/create-playlist";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { StyledDrawer } from "./styles";

export const Sidebar: FC = () => {
  const { list } = useSelector((state: RootState) => state.playlists);

  const showCreatePlaylist = list.length < 1;

  return (
    <StyledDrawer open variant="permanent">
      <Menu />

      {showCreatePlaylist && <CreatePlaylist />}
    </StyledDrawer>
  );
};
