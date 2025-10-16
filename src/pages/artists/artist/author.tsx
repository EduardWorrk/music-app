import React, { FC } from "react";
import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import { AVATAR_SIZE } from "@utils/index";

type Props = {
  img: string;
  name: string;
  loading: boolean;
};

export const Author: FC<Props> = ({ img, name, loading }) => {
  return (
    <Stack direction="row" spacing={3}>
      {loading ? (
        <Skeleton variant="circular" {...AVATAR_SIZE} />
      ) : (
        <Avatar variant="square" sx={AVATAR_SIZE} src={img} />
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
