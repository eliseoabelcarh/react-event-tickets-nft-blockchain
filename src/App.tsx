import { Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import LayoutScreen from "./components/layout/mainLayout/LayoutScreen";
import { MainRoutes } from "./routes/Routes";
import backgroundIm from "./assets/hero-bg.webp";
export default function App() {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //height: "100vh",
        width: "100vw",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        borderRadius: 0,
        padding: 0,
        margin: 0,
        backgroundImage: `linear-gradient(180deg, rgba(5,0,53,0) 0%, #050035 90%), url(${backgroundIm})`,
      }}
    >
      <LayoutScreen children={<MainRoutes />} />
    </Paper>
  );
}
