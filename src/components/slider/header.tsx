import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  link: string;
};
export const Header: FC<Props> = ({ title, link }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h3" color="white" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Link
        to={link}
        color="white"
        style={{
          color: "#7F838A",
          fontSize: 14,
          textDecoration: "none",
        }}
      >
        Показать все
      </Link>
    </Stack>
  );
};
