import { useMemo, FC, Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import { routes } from "@constants/routes";
import { useLocation, useNavigate } from "react-router";
import Divider from "@mui/material/Divider";
import { removeSlash } from "@utils/index";
import {
  SListItemText,
  styleIconMenu,
} from "@components/layout-main/menu/styles";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export const Menu: FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const menu = useMemo(() => {
    return [
      {
        text: "Главная",
        icon: <HomeIcon {...styleIconMenu} />,
        url: routes.main,
      },
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
    <Box sx={{ pt: 5 }}>
      <List sx={{ paddingLeft: (theme) => theme.spacing(1), paddingTop: 5 }}>
        {menu.map((menu) => {
          return (
            <Fragment key={menu.text}>
              {menu.divider && (
                <Divider
                  sx={{
                    borderColor: (theme) => theme.palette.grey[700],
                  }}
                />
              )}

              <ListItem key={menu.text}>
                <ListItemButton onClick={() => navigate(`/${menu.url}`)}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <SListItemText
                    disableTypography
                    sx={{
                      color: (theme) => theme.palette.grey[700],
                      fontSize: "16px",
                    }}
                    className={
                      removeSlash(pathname) === menu.url ? "active" : ""
                    }
                    primary={menu.text}
                  />
                </ListItemButton>
              </ListItem>
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};
