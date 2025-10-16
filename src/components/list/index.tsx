import { Box, Grid, Typography, Stack } from "@mui/material";
import { ListItem } from "@components/list/list-item";
import { AlbumListItem } from "@components/list/album-list-item";
import { ViewToggle } from "@components/list/view-toggle";

type Props<T> = {
  title: string;
  data?: T[];
  onCallBack: (id: number) => void;
  viewMode?: "grid" | "list";
  showViewToggle?: boolean;
  onViewChange?: (view: "grid" | "list") => void;
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
  viewMode = "grid",
  showViewToggle = false,
  onViewChange,
}: Props<T>) => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h3" color="white">
          {title}
        </Typography>
        {showViewToggle && onViewChange && (
          <ViewToggle view={viewMode} onViewChange={onViewChange} />
        )}
      </Stack>

      {viewMode === "grid" ? (
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
      ) : (
        <Stack spacing={1}>
          {data?.map((elem) => (
            <AlbumListItem
              key={elem.id}
              id={elem.id || ""}
              date={elem.date}
              name={elem.name || ""}
              image={elem.image}
              active={!!elem.active}
              background={elem.background}
              onCallBack={(id) => onCallBack(id)}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};
