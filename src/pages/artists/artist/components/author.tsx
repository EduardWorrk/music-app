import React, { FC } from "react";
import { Avatar, Skeleton, Stack, Typography } from "@mui/material";

type Props = {
  img: string;
  name: string;
  loading: boolean;
};

const AVATAR_SIZE = { width: 150, height: 150 };

export const Author: FC<Props> = ({ img, name, loading }) => {
  return (
    <Stack direction="row" spacing={3}>
      {loading ? (
        <Skeleton variant="circular" {...AVATAR_SIZE} />
      ) : (
        <Avatar sx={AVATAR_SIZE} src={img} />
      )}

      <Stack spacing={1}>
        <Typography color={(theme) => theme.palette.grey[600]}>
          Артист
        </Typography>
        <Typography variant="h3" color="white">
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
};
