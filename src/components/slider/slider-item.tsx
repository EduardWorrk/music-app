import { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SSliderItem } from "@components/slider/styles";

type Props = {
  id: string;
  scrImage: string;
  showName: boolean;
  widthItem?: number;
  onCallBack: (value: number) => void;
  albumName?: string;
  artistName?: string;
};

export const SliderItem: FC<Props> = ({
  id,
  scrImage,
  showName,
  onCallBack,
  widthItem,
  albumName,
  artistName,
}) => {
  return (
    <SSliderItem
      sx={{ minWidth: widthItem }}
      key={id}
      onClick={() => onCallBack(Number(id))}
    >
      <Box
        component="img"
        src={scrImage}
        alt="Album cover"
        sx={{
          width: "100%",
          aspectRatio: "1/1",
          borderRadius: "8px",
          objectFit: "cover",
          mb: 1.5,
        }}
      />
      {showName && (
        <Stack spacing={0.5}>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontSize: "14px",
            }}
          >
            {albumName || "Album Name"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#b3b3b3",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontSize: "12px",
            }}
          >
            {artistName || "Artist Name"}
          </Typography>
        </Stack>
      )}
    </SSliderItem>
  );
};
