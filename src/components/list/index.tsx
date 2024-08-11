import { Box, Grid, Typography } from "@mui/material";
import { ListItem } from "@components/list/list-item";

type Props<T> = {
  title: string;
  data?: T[];
  onCallBack: (id: number) => void;
};

type ItemList = {
  name: string;
  id: string;
  active: boolean;
  image: string;
  background?: string;
  date: string;
};

export const List = <T extends Partial<ItemList>>({
  title,
  data,
  onCallBack,
}: Props<T>) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }} color="white">
        {title}
      </Typography>

      <Grid container rowSpacing={3} spacing={2}>
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
              <ListItem
                id={elem.id || ""}
                date={elem.date}
                name={elem.name || ""}
                image={elem.image}
                active={!!elem.active}
                background={elem.background}
                onCallBack={(id) => onCallBack(id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
