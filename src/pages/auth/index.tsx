import { Box, Grid, Stack } from "@mui/material";

import React, { ReactNode } from "react";
import { AuthTabs } from "@components/auth-tabs";
import { routes } from "@constants/routes";
import { IconLogo } from "@components/icons";

type Props = {
  children: ReactNode;
};
export const LayoutAuth: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ background: "#121212", height: "100vh" }}
    >
      <AuthTabs
        tabs={[
          { name: "Логин", url: routes.login },
          {
            name: "Регистрация",
            url: routes.registration,
          },
          {
            name: "Восстановление пароля",
            url: routes.recoveryPassword,
          },
        ]}
      />

      <Stack>
        <Box sx={{ mb: 4 }}>
          <IconLogo />
        </Box>

        <Box sx={{ width: "390px" }}>{children}</Box>
      </Stack>
    </Grid>
  );
};
