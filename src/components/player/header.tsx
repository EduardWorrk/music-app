import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { trimText } from "@utils/index";

type Props = {
  name?: string;
  artist_name?: string;
};

export const Header: FC<Props> = ({ name = "", artist_name = "" }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Stack spacing={1}>
        <Typography fontSize={14} variant="subtitle2" color="white">
          {trimText(name, 25)}
        </Typography>

        <Typography
          fontSize={12}
          variant="caption"
          color={(theme) => theme.palette.grey[600]}
        >
          {artist_name}
        </Typography>
      </Stack>
    </Box>
  );
};
