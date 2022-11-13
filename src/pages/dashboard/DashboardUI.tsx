import React from "react";
import HeaderTitle from "../../components/layout/HeaderTitle";
import { itemsDrawer } from "../../data/ItemsDrawer";
import CardStatistics from "../../components/CardStatistics";
import { myColors } from "../../helpers/myColors";
import { Box, Grid, Card, Divider, Typography } from "@mui/material";
//import "react-circular-progressbar/dist/styles.css";
import CircularPercentage from "../../components/CircularPercentage";
import SearchBox from "../../components/SearchBox";
import LinearPercentage from "../../components/LinearPercentage";

interface eventPercentage {
  title: string;
  percentage: number;
}
interface statisticsCard {
  title: string;
  total: number;
  percentage: number;
  timing: string;
}
type Props = {
  statisticsCards?: statisticsCard[];
  eventsSales?: eventPercentage[];
  handleViewEvents?: () => void;
  viewEventsText?: string;
  placeholderFilterByText?: string;
  handleChangeFilterBoxInputText?: (text: string) => void;
};

export default function DashboardUI({
  statisticsCards,
  eventsSales,
  handleViewEvents,
  viewEventsText,
  placeholderFilterByText,
  handleChangeFilterBoxInputText,
}: Props) {
  return (
    <React.Fragment>
      <HeaderTitle />
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "transparent" }}>
        <Grid container spacing={3}>
          {statisticsCards?.map((item, index) => (
            <CardStatistics
              key={index}
              title={item.title}
              totalNumber={item.total}
              percentage={item.percentage}
              timingText={item.timing}
            />
          ))}
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

            <Grid item xs={12} sm={9} sx={{ padding: 1 }}>

              <SearchBox
                handleViewAll={handleViewEvents}
                viewAllText={viewEventsText}
                placeholderText={placeholderFilterByText}
                handleChangeInputText={handleChangeFilterBoxInputText}
              />

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {eventsSales && eventsSales.length > 0 ? (
                  eventsSales.map((event, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <LinearPercentage
                        title={event.title}
                        percentage={event.percentage}
                      />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12} sm={12}>
                    <Typography
                      variant="body2"
                      sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: myColors.ligthText,
                      }}
                    >
                     No events found
                    </Typography>
                  </Grid>
                )}
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
