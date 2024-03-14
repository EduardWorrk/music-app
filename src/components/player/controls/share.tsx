import { FC, useState } from "react";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Fade,
  Popper,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import { iconStyle } from "@components/player/utils";
import { useLocation } from "react-router";
import copy from "clipboard-copy";

export const Share: FC = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const location = useLocation();
  const currentURL = location.pathname + location.search;

  const handleCopyClick = () => {
    copy(currentURL);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={onClose}
      >
        <>
          <IconButton onClick={handleClick}>
            <ShareIcon sx={iconStyle} />
          </IconButton>
          <Popper
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
            open={open}
            anchorEl={anchorEl}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={handleCopyClick} size="small">
                    Скопировать ссылку
                  </Button>
                </ButtonGroup>
              </Fade>
            )}
          </Popper>
        </>
      </ClickAwayListener>
    </div>
  );
};
