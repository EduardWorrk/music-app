import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@api/auth";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResponseError } from "@declarations/index";
import { TLogin } from "@declarations/auth";
import { StyledTextField, StylesButton } from "../styles";
import { LayoutAuth } from "..";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendLogin = useMutation({
    mutationFn: authApi.authenticateUser,
    onSuccess: ({ token }) => {
      localStorage.setItem("Authorization", token);
      if (token) {
        navigate(`/`);
      }
    },

    onError: (error: ResponseError) => {
      if (error.response) {
        const errorMessage = error.response.data.error;
        setError(errorMessage);
      }
    },
  });

  const onSubmit = (data: TLogin) => {
    const { userName, password } = data;

    sendLogin.mutate({ userName, password });
  };

  return (
    <LayoutAuth>
      <Typography variant="h1" color="white" sx={{ mb: 1 }}>
        Авторизация
      </Typography>

      {error && (
        <Typography variant="subtitle1" sx={{ mb: 1 }} color="error.main">
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Controller
            name="userName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Логин"
                {...field}
                error={!!errors.userName}
                helperText={errors.userName?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="Пароль"
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
                type="password"
              />
            )}
          />
          <StylesButton fullWidth type="submit" variant="contained">
            Войти
          </StylesButton>
        </Stack>
      </form>
    </LayoutAuth>
  );
};

const TEXT_ERROR = "Обязательное поле";

const schema = yup.object().shape({
  userName: yup.string().required(TEXT_ERROR),
  password: yup.string().required(TEXT_ERROR),
});
