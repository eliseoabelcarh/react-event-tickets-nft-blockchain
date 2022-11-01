import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { myColors } from "../helpers/colors";

type Props = {
  xs?: number;
  sm?: number;
  title?: string;
  subtitle?: string;
  totalNumber?: number;
  percentage?: number;
  timingText?: string;
};

export default function CardStatistics({
  xs = 12,
  sm = 4,
  title = "Title",
  subtitle = "",
  totalNumber = 45,
  percentage = 23,
  timingText = "(vs last month)",
}: Props) {
  /*This item will be 12 units on extra small screens => XS field */
  /*But will be 4 units on small screens => SM field */
  return (
    <Grid item xs={xs} sm={sm}>
      <Card sx={styles.card} elevation={2}>
        <CardHeader
          sx={styles.cardHeader}
          title={title}
          titleTypographyProps={{
            variant: "subtitle2",
            color: myColors.ligthText,
            fontWeight: "bold",
          }}
          subheader={subtitle ? subtitle : ""}
          subheaderTypographyProps={{
            variant: "subtitle2",
            color: myColors.ligthText,
          }}
        />
        <CardContent sx={styles.cardContent}>
          <Typography
            sx={{ mr: 1, fontWeight: "bold" }}
            variant="h5"
            component="div"
            display="inline-flex"
          >
            {totalNumber}
          </Typography>
          <Typography
            sx={{ mr: 0.4, fontWeight: "bold", color: myColors.greenNeon }}
            display="inline-flex"
            variant="caption"
          >
            +{percentage}%
          </Typography>
          <Typography display="inline-flex" variant="caption">
            {timingText}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const styles = {
  card: {
    backgroundColor: myColors.cardBackgroundColor,
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
