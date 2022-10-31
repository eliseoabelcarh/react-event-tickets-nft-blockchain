import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./Header";
import Dashboard from "../../pages/Dashboard";
import { Theme } from "@mui/material";

type Props = {
  theme: Theme;
  drawerWidth: number;
  navigator: JSX.Element;
  handleDrawerToggle: () => void;
  stylesBody: React.CSSProperties;
  children: React.ReactNode;
};

export default function Paperbase({
  theme,
  drawerWidth,
  navigator,
  handleDrawerToggle,
  stylesBody,
  children,
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={stylesBody}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {navigator}
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onDrawerToggle={handleDrawerToggle} />

          {children}

        </Box>
      </Box>
    </ThemeProvider>
  );
}
