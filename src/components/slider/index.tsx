import { FC, useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import {
  SArrowLeftButton,
  SArrowRightButton,
  SSlider,
} from "@components/slider/styles";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SliderItem } from "@components/slider/slider-item";

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

// TODO переписать слайдер

export const Slider: FC<Props> = ({
  title,
  data,
  category,
  showName = false,
  onCallBack,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [list, setList] = useState<TSlider[]>([]);

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

  return (
    <SSlider>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" color="white" sx={{ mb: 2 }}>
          {title}
        </Typography>

        <Link
          to={category}
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

      <Box ref={ref} sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data ? (
            <>
              {list?.map((item) => {
                return (
                  <SliderItem
                    id={item.id}
                    showName={showName}
                    scrImage={item.image}
                    onCallBack={() => onCallBack(+item.id)}
                  />
                );
              })}

              <SArrowLeftButton onClick={onLeft}>
                <ArrowLeftIcon />
              </SArrowLeftButton>

              <SArrowRightButton onClick={onRight}>
                <ArrowRightIcon />
              </SArrowRightButton>
            </>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", padding: 8 }}>
              <CircularProgress sx={{ color: "white" }} />
            </Box>
          )}
        </Box>
      </Box>
    </SSlider>
  );
};
