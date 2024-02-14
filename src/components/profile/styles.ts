import { Avatar, css, styled } from "@mui/material";

export const SAvatar = styled(Avatar)(
  ({ theme }) => css`
    border: 2px solid ${theme.palette.grey[700]};
    background: ${theme.palette.grey[800]};
  `
);
