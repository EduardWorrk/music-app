import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { formatDate } from "@utils/date";
import { trimText } from "@utils/index";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

type Props = {
  image?: string;
  name: string;
  background?: string;
  id: number | string;
  date?: string;
  active: boolean;
  onCallBack: (id: number) => void;
};

export const AlbumListItem: FC<Props> = ({
  id,
  active,
  onCallBack,
  image,
  name,
  background,
  date,
}) => {
  return (
    <Box
      onClick={() => onCallBack(Number(id))}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid #1E1E1E",
        borderRadius: 1,
        padding: 2,
        cursor: "pointer",
        transition: "200ms all linear",
        backgroundColor: active ? "rgba(255, 255, 255, 0.1)" : "transparent",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ width: 64, height: 64, flexShrink: 0 }}>
          {image ? (
            <img
              src={image}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 64,
                height: 64,
                backgroundColor: background || "#333",
                borderRadius: 1,
              }}
            >
              <QueueMusicIcon sx={{ color: "grey.600", fontSize: 32 }} />
            </Box>
          )}
        </Box>

        <Stack spacing={0.5}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {trimText(name, 50)}
          </Typography>
          {date && (
            <Typography
              variant="subtitle2"
              sx={{
                color: "grey.600",
                fontSize: 14,
              }}
            >
              {formatDate(date)}
            </Typography>
          )}
        </Stack>
      </Stack>

      <Box
        sx={{
          opacity: 0,
          transition: "opacity 200ms",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Box
          sx={{
            background: "#1E1E1E",
            borderRadius: "50%",
            padding: 1,
            width: 40,
            height: 40,
            border: "1px solid #333",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          <PlayArrowIcon sx={{ color: "white", fontSize: 20 }} />
        </Box>
      </Box>
    </Box>
  );
};
