import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  SArrowLeftButton,
  SArrowRightButton,
  SSlider,
} from "@components/slider/styles";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SliderItem } from "@components/slider/slider-item";
import { Header } from "@components/slider/header";

export type TSlider = {
  id: string;
  name: string;
  image: string;
};

type Props = {
  category: string;
  title: string;
  showName?: boolean;
  data?: TSlider[];
  onCallBack: (id: number) => void;
};

const DEFAULT_ITEM = 4;
const GAP = 10;

export const Slider: FC<Props> = ({
  title,
  data,
  category,
  showName = false,
  onCallBack,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [list, setList] = useState<TSlider[]>([]);

  const widthSlider = ref.current?.offsetWidth;

  const widthItem = widthSlider && widthSlider / DEFAULT_ITEM - GAP;

  useEffect(() => {
    data && setList(data);
  }, [data]);

  const onLeft = () => {
    const newElement = list[list.length - 1];
    list.pop();
    list.unshift(newElement);
    setList([...list]);
  };

  const onRight = () => {
    const newElement = list[0];
    list.shift();
    list.push(newElement);
    setList([...list]);
  };

  const onCall = useCallback(
    (id: number) => {
      onCallBack(+id);
    },
    [onCallBack]
  );

  return (
    <SSlider>
      {data ? (
        <>
          <Header title={title} link={category} />
          <Box ref={ref} sx={{ overflow: "hidden", position: "relative" }}>
            <Box
              sx={{
                gap: `${GAP}px`,
                display: "flex",
                width: widthSlider,
                justifyContent: "center",
              }}
            >
              {list?.map((item) => {
                return (
                  <SliderItem
                    key={item.id}
                    id={item.id}
                    showName={showName}
                    widthItem={widthItem}
                    scrImage={item.image}
                    onCallBack={onCall}
                  />
                );
              })}
            </Box>

            <SArrowLeftButton onClick={onLeft}>
              <ArrowLeftIcon />
            </SArrowLeftButton>

            <SArrowRightButton onClick={onRight}>
              <ArrowRightIcon />
            </SArrowRightButton>
          </Box>
        </>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 8 }}>
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      )}
    </SSlider>
  );
};
