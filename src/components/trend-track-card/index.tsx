import { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { STrendCard } from "./styles";

type Props = {
  id: string;
  image: string;
  name: string;
  artistName: string;
  onClick: (id: number) => void;
};

export const TrendTrackCard: FC<Props> = ({
  id,
  image,
  name,
  artistName,
  onClick,
}) => {
  return (
    <STrendCard
      onClick={() => {
        onClick(Number(id));
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          aspectRatio: "1/1",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <Stack spacing={0.5} sx={{ mt: 1.5 }}>
        <Typography
          variant="subtitle1"
          color="white"
          sx={{
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b3b3b3",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {artistName}
        </Typography>
      </Stack>
    </STrendCard>
  );
};
