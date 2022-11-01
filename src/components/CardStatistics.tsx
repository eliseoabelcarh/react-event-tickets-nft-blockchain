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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function CardStatistics() {
  /*This item will be 12 units on extra small screens */
  /*But will be 4 units on small screens */
  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ backgroundColor: "rgba(255,255,255,0.04)" }} elevation={2}>
        <CardHeader
          sx={{ backgroundColor: "#333b48" , pb:0.8, pt:0.8}}
          title="Numbers of Events"
          titleTypographyProps={{
            variant: "subtitle2",
            color: myColors.ligthText,
            fontWeight: "bold",
          }}
          //subheader="September 14, 2016"
          subheaderTypographyProps={{ variant: "subtitle2" }}
        />
        <CardContent
          sx={{
            color: myColors.ligthText,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          
          }}
        >
          <Typography
            sx={{ mr: 1 , fontWeight: 'bold'}}
            variant="h5"
            component="div"
            display="inline-flex"
          >
            45
          </Typography>
          <Typography
            sx={{ mr: 0.4, fontWeight: "bold" , color: '#39ff14'}}
            display="inline-flex"
            variant="caption"
          >
            +23%
          </Typography>
          <Typography display="inline-flex" variant="caption">
            (vs last week)
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const styles = {
  paper: {
    padding: 1,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
    borderRadius: "5px",
    elevation: 0,
  },
};
