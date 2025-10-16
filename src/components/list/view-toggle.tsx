import React, { FC } from "react";
import { IconButton, Stack } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";

type ViewMode = "grid" | "list";

type Props = {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

export const ViewToggle: FC<Props> = ({ view, onViewChange }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <IconButton
        onClick={() => onViewChange("grid")}
        sx={{
          color: view === "grid" ? "white" : "grey.600",
          "&:hover": {
            color: "white",
          },
        }}
        size="small"
      >
        <GridViewOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={() => onViewChange("list")}
        sx={{
          color: view === "list" ? "white" : "grey.600",
          "&:hover": {
            color: "white",
          },
        }}
        size="small"
      >
        <ViewListOutlinedIcon />
      </IconButton>
    </Stack>
  );
};
