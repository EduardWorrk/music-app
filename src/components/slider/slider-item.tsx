import { FC } from "react";

import { SSliderItem } from "@components/slider/styles";

type Props = {
  id: string;
  scrImage: string;
  showName: boolean;
  onCallBack: (value: number) => void;
};

export const SliderItem: FC<Props> = ({ id, scrImage, onCallBack }) => {
  return (
    <SSliderItem key={id} onClick={() => onCallBack(Number(id))}>
      <img src={scrImage} style={{ width: "100%", height: "100%" }} alt="" />
    </SSliderItem>
  );
};
