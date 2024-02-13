import { css, styled } from "@mui/material";

export const StylesTab = styled("div")(
  ({ theme }) => css`
    color: ${theme.palette.grey[600]};
    cursor: pointer;
    padding: 10px 15px;
    font-size: 16px;

    &.active {
      color: white;
      border-bottom: 2px solid white;
    }
  `
);

export const WrapListTabs = styled("div")(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  `
);

export const WrapTabs = styled("div")(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
  `
);

export const WrapContent = styled("div")(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `
);
