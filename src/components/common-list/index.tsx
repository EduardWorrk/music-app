import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { formatDate } from "@utils/date";
import {
  sAddIcon,
  SAlbum,
  SNew,
  StyledItemList,
} from "@components/common-list/styles";
import { trimText } from "@utils/index";
import AddIcon from "@mui/icons-material/Add";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

type TCommonList = {
  id: string;
  name: string;
  date?: string;
  image: string;
  background?: string;
};

type Props<T extends TCommonList[]> = {
  newList?: boolean;
  title: string;
  data?: T | null;
  onCallBackCreate?: (value: boolean) => void;
  onCallBack?: (id: number) => void;
};

export const CommonList: FC<Props<TCommonList[]>> = ({
  newList,
  title,
  data,
  onCallBack,
  onCallBackCreate,
}) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }} color="white">
        {title}
      </Typography>

      <Grid container rowSpacing={3} spacing={2}>
        {newList && (
          <Grid
            item
            lg={3}
            sm={12}
            md={6}
            sx={{ minWidth: 200, minHeight: 200 }}
          >
            <SAlbum
              onClick={() => onCallBackCreate && onCallBackCreate(true)}
              style={{ width: "100%", height: "100%" }}
            >
              <SNew>
                <AddIcon {...sAddIcon} />
              </SNew>
            </SAlbum>
          </Grid>
        )}

        {data?.map((elem) => {
          return (
            <Grid
              item
              lg={3}
              md={6}
              sm={12}
              key={elem.id}
              sx={{ minHeight: 204 }}
            >
              <StyledItemList
                onClick={() => onCallBack && onCallBack(Number(elem.id))}
              >
                <SAlbum>
                  {elem.image ? (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={elem.image}
                      alt={elem.name}
                    />
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: 204,
                        backgroundColor: elem.background,
                      }}
                    >
                      <QueueMusicIcon
                        sx={{ width: 40, height: 40, color: "white" }}
                      />
                    </Box>
                  )}
                </SAlbum>

                <Typography
                  sx={{ fontSize: 14, pt: 1 }}
                  variant="subtitle1"
                  color={(theme) => theme.palette.grey[500]}
                >
                  {trimText(elem.name, 20)}
                </Typography>

                {elem.date && (
                  <Typography
                    sx={{ fontSize: 12 }}
                    color={(theme) => theme.palette.grey[700]}
                    variant="subtitle2"
                  >
                    {formatDate(elem.date)}
                  </Typography>
                )}
              </StyledItemList>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
