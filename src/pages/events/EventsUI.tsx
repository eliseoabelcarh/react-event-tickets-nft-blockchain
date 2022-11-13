import React from "react";
import {
  Box,
  Grid,
  Card,
  Divider,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import HeaderTitle from "../../components/layout/HeaderTitle";
import { itemsDrawer } from "../../data/ItemsDrawer";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import OptionsButton from "../../components/buttons/OptionsButton";

export default function EventsUI() {
  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="transparent" //primary
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
               <PrimaryButton />
              </Grid>
              <Grid item xs/>
              <Grid item>
               <PrimaryButton />
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
