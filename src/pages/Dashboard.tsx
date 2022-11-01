import React from "react";
import HeaderTitle from "../components/layout/HeaderTitle";
import { itemsDrawer } from "../data/ItemsDrawer";
import CardStatistics from "../components/CardStatistics";
import { myColors } from "../helpers/colors";
import {
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Card,
  Divider,
  CircularProgress,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
import { createStyles, styled } from "@mui/material/styles";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircularPercentage from "../components/CircularPercentage";

import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
type Props = {};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: myColors.ligthText,
  boxShadow: "none",
}));
const ItemCircularProgress = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: myColors.ligthText,
  boxShadow: "none",
  maxWidth: "120px",
  marginBottom: "10px",
  marginTop: "-5px",
}));

const percentage = 75;
export default function Dashboard({}: Props) {
  return (
    <React.Fragment>
      <HeaderTitle title={itemsDrawer.DASHBOARD} />
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "transparent" }}>
        <Grid container spacing={3}>
          <CardStatistics title="New Orders" totalNumber={45} percentage={23} />
          <CardStatistics
            title="Number of Events"
            totalNumber={10}
            percentage={13}
          />
          <CardStatistics
            title="New Customers"
            totalNumber={55}
            percentage={2}
          />
        </Grid>
        <Divider sx={{ mt: 3, backgroundColor: "transparent" }} />
        <Card sx={styles.cardContainer} elevation={2}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <CircularPercentage />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Paper
                component="form"
                sx={{
                  p: "0px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                }}
              >
            
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Filter by event"
                  inputProps={{ "aria-label": "filter by event" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <DirectionsIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </React.Fragment>
  );
}
const styles = {
  cardContainer: {
    backgroundColor: myColors.cardBackgroundColor,
  },
  cardTicketsSold: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "0",
  },
  cardContentCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 0,
  },
  cardHeader: {
    backgroundColor: myColors.cardHeaderBackgroundColor,
    pb: 0.8,
    pt: 0.8,
  },
  cardContent: {
    color: myColors.ligthText,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};
