import React from "react";
import { Stack, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TLogin } from "@declarations/auth";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@api/auth";
import { useNavigate } from "react-router";
import { routes } from "@constants/routes";
import { EToken, tokenManager } from "@utils/token-manager";
import { LayoutAuth } from "../index";
import { StyledTextField, StylesButton } from "../styles";

export const Registration = () => {
  const navigate = useNavigate();

  const createAccount = useMutation({
    mutationFn: authApi.registrationUser,
    onSuccess: ({ token }) => {
      tokenManager.setToken(EToken.access, token);
      navigate(`/${routes.main}`);
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: TLogin) => {
    const { userName, password } = data;
    createAccount.mutate({ userName, password });
  };

  return (
    <LayoutAuth>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Typography variant="h1" color="white">
          Регистрация
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
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
              Создать аккаунт
            </StylesButton>
          </Stack>
        </form>
      </Stack>
    </LayoutAuth>
  );
};

const schema = yup.object().shape({
  userName: yup.string().required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(6, "придумайте пароль минимум 6 символов"),
});
