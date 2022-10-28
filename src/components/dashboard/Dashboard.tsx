import React from "react";
import Box from "@mui/material/Box";
import Content from "../layout/Content";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // Grid version 1
import { myColors } from "../../helpers/colors";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { colors, Container } from "@mui/material";
import HeaderTitle from "../layout/HeaderTitle";
type Props = {};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "red",
  borderRadius: "0px",
}));
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
      <HeaderTitle />
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
