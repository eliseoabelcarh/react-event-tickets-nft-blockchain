import { Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import SellerScreen from "./components/layout/seller/SellerScreen";
import { MainRoutes } from "./routes/Routes";
import backgroundIm from "./assets/hero-bg.webp";
export default function App() {
  return (
    <Paper
      //align children to the center of the screen
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        // add background image with linear gradient 180 deg rgba(5,0,53,0) with size auto cover and reapeat no repeat
        backgroundImage: `linear-gradient(180deg, rgba(5,0,53,0) 0%, #050035 100%), url(${backgroundIm})`,
      }}
    >
      <SellerScreen children={<MainRoutes />} />
    </Paper>
  );
}
