import React, { FC } from "react";
import { SAlbum, StyledItemList } from "@components/list/styles";
import { Box, Typography } from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { formatDate } from "@utils/date";
import { trimText } from "@utils/index";

type Props = {
  image?: string;
  name: string;
  background?: string;
  id: number | string;
  date?: string;
  active: boolean;
  onCallBack: (id: number) => void;
};

export const ListItem: FC<Props> = ({
  id,
  active,
  onCallBack,
  image,
  name,
  background,
  date,
}) => {
  return (
    <StyledItemList active={active} onClick={() => onCallBack(Number(id))}>
      <SAlbum>
        {image ? (
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 204,
              backgroundColor: background,
            }}
          >
            <QueueMusicIcon width={40} height={40} color="action" />
          </Box>
        )}
      </SAlbum>

      <Typography
        sx={{ fontSize: 14, pt: 1 }}
        variant="subtitle1"
        color={(theme) => theme.palette.grey[500]}
      >
        {trimText(name, 20)}
      </Typography>

      {date && (
        <Typography
          sx={{ fontSize: 12 }}
          color={(theme) => theme.palette.grey[700]}
          variant="subtitle2"
        >
          {formatDate(date)}
        </Typography>
      )}
    </StyledItemList>
  );
};
