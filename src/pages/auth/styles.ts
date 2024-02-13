import { Button, css, styled, TextField } from "@mui/material";

export const StylesButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    padding: 15px;
    color: white;
    border-radius: 5px;
  `
);

export const StyledTextField = styled(TextField)(
  ({ theme }) => css`
    border-radius: 4px;
  `
);
