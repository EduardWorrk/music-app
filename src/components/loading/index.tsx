import { FC } from "react";
import { CircularProgress } from "@mui/material";
import { WrapLoading } from "@components/loading/styles";

type Props = {
  verticalSize: number;
};
export const Loading: FC<Props> = ({ verticalSize }) => {
  return (
    <WrapLoading size={verticalSize}>
      <CircularProgress sx={{ color: "white" }} />
    </WrapLoading>
  );
};
