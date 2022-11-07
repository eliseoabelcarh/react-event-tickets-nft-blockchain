import React from "react";
import HeaderTitle from "../components/layout/HeaderTitle";
import { itemsDrawer } from "../data/ItemsDrawer";
import CardStatistics from "../components/CardStatistics";
import { myColors } from "../helpers/colors";
import { Box, Grid, Card, Divider } from "@mui/material";
//import "react-circular-progressbar/dist/styles.css";
import CircularPercentage from "../components/CircularPercentage";
import SearchBox from "../components/SearchBox";
import LinearPercentage from "../components/LinearPercentage";


const eventsSales = [
  { title: "Event 1", percentage: 40 },
  { title: "Event 2", percentage: 81 },
  { title: "Event 3", percentage: 61 },
  { title: "Event 4", percentage: 11 },
  { title: "Event 5", percentage: 21 },
]

type Props = {};

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

            <Grid
              item
              xs={12}
              sm={9}
              sx={{
                // justifyContent: "center",
                // alignItems: "center",
                // display: "flex",
                padding: 1,
              }}
            >
              <SearchBox />

              <Grid container spacing={2} sx={{ mt: 2,}}>

                {eventsSales.map((event, index) => (

                <Grid item xs={6} sm={4} key={index}>
                  <LinearPercentage title={event.title} percentage={event.percentage} />
                </Grid>
                ))}


              </Grid>
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
    padding: 2,
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
