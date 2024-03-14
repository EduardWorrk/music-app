import { FC, useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import {
  SArrowLeftButton,
  SArrowRightButton,
  SSlider,
  SSliderItem,
} from "@components/slider/styles";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

export const Slider: FC<Props> = ({
  title,
  data,
  category,
  showName = false,
  onCallBack,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const widthItem = Number(ref?.current?.clientWidth) / 4 - 8;

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
            width: ref?.current?.clientWidth,
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {data ? (
            <>
              {list?.map((item) => {
                return (
                  <SSliderItem
                    key={item.id}
                    sx={{
                      width: widthItem,
                      minWidth: widthItem,
                    }}
                    onClick={() => onCallBack(Number(item.id))}
                  >
                    {showName && <Box>{item.name}</Box>}

                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={item.image}
                      alt={item.name}
                    />
                  </SSliderItem>
                );
              })}

              <SArrowLeftButton onClick={onLeft}>
                <ArrowLeftIcon sx={{ color: "white" }} />
              </SArrowLeftButton>

              <SArrowRightButton onClick={onRight}>
                <ArrowRightIcon sx={{ color: "white" }} />
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
