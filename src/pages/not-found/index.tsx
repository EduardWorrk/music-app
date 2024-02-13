import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { SNotFound } from "@pages/not-found/styles";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <SNotFound>
      <Stack spacing={2}>
        <Typography variant="h1" color="white">
          Такой страницы не существует
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Вернуться на главную
        </Button>
      </Stack>
    </SNotFound>
  );
};
