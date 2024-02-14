import React from "react";
import { Stack, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LayoutAuth } from "..";
import { StyledTextField, StylesButton } from "../styles";

export const RecoveryPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {};

  return (
    <LayoutAuth>
      <Typography variant="h1" color="white">
        Восстановление пароля
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                fullWidth
                variant="outlined"
                placeholder="email"
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <StylesButton fullWidth type="submit" variant="contained">
            Восстановить пароль
          </StylesButton>
        </Stack>
      </form>
    </LayoutAuth>
  );
};

const schema = yup.object().shape({
  email: yup.string().required("Обязательное поле"),
});
