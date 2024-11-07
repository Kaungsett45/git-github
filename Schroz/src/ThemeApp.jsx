import React from 'react'
import { useState ,useMemo , createContext ,useContext } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
 } from "@mui/material";

 
import App from "./App";


 
export const AppContext = createContext();

export  function useApp() {
  return useContext(AppContext);
 
}

export default function ThemedApp() {

  const [showForm, setShowForm] = useState(false);

  const [mode, setMode] = useState("dark");

  const theme =   useMemo(()=>{
  
  return createTheme({
    palette: {
      mode
    },
   });
  }, [mode]);
  
  return (
  <ThemeProvider theme={theme}>
  <AppContext.Provider value={{ showForm, setShowForm, mode , setMode }}>
  <App />
  <CssBaseline />
  </AppContext.Provider>
  </ThemeProvider>
  );
 }
 