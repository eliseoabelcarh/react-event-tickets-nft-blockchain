import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // Grid version 1
import HeaderTitle from "../components/layout/HeaderTitle";
import { itemsDrawer } from "../data/ItemsDrawer";

type Props = {};

const classes = {
  paper: {
    padding: 1,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
    borderRadius: "5px",
    elevation: 0,
  },
};

export default function Dashboard({}: Props) {
  
  return (
    <React.Fragment>
      <HeaderTitle title={itemsDrawer.DASHBOARD} />
      <Box sx={{ flexGrow: 1, padding: 2 , backgroundColor: 'transparent'}}>
        <Grid container spacing={1}>
          {/*This item will be 12 units on extra small screens */}
          {/*But will be 4 units on small screens */}
          <Grid item xs={12} sm={4}>
            <Paper sx={classes.paper}>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={classes.paper}>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={classes.paper}>xs=12 sm=4</Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
