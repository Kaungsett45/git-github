import React from 'react'
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

import AppDrawer from "./components/AppDrawer";
import { Box} from "@mui/material";
import { useApp } from "./ThemeApp";
import { Container } from '@mui/system';
import { Snackbar } from '@mui/material';

export default function Template() {

  const { globalMsg, setGlobalMsg } = useApp();

  return (
    <Box>
    <Header />
        <AppDrawer/>

        <Container maxWidth="sm" sx={{ mt:4 }}>
          <Outlet/>
        </Container>

    <Snackbar
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
          }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
          />
    </Box>
  );
}