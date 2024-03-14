import { useMemo, FC } from "react";
import { Box } from "@mui/material";
import { routes } from "@constants/routes";
import { useLocation, useNavigate } from "react-router";
import { removeSlash } from "@utils/index";
import {
  SListItemText,
  styleIconMenu,
} from "@components/layout-main/menu/styles";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export const Menu: FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const menu = useMemo(() => {
    return [
      {
        text: "Альбомы",
        icon: <LibraryMusicIcon {...styleIconMenu} />,
        url: routes.albums,
      },
      {
        text: "Артисты",
        icon: <PeopleAltIcon {...styleIconMenu} />,
        url: routes.artists,
      },
      {
        text: "Моя музыка",
        icon: <MusicNoteIcon {...styleIconMenu} />,
        url: routes.myMusic,
        divider: true,
      },
    ];
  }, []);

  return (
    <Box display="flex">
      {menu.map((menu) => {
        return (
          <Box
            sx={{ pl: 2, cursor: "pointer" }}
            key={menu.text}
            onClick={() => navigate(`/${menu.url}`)}
          >
            <SListItemText
              disableTypography
              sx={{
                color: (theme) => theme.palette.grey[700],
                fontSize: "16px",
              }}
              className={removeSlash(pathname) === menu.url ? "active" : ""}
              primary={menu.text}
            />
          </Box>
        );
      })}
    </Box>
  );
};
