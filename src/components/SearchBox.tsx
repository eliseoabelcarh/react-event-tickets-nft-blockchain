import React from "react";
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
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import NavigateNext from "@mui/icons-material/NavigateNext";


type Props = {};

export default function SearchBox({}: Props) {
  return (
    <Paper
      component="form"
      sx={{
        p: "0px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        backgroundColor: myColors.cardHeaderBackgroundColor,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: myColors.ligthText, fontSize: "0.8rem" }}
        placeholder="Filter by event"
        inputProps={{ "aria-label": "filter by event" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: myColors.ligthText }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Typography
        variant="caption"
        sx={{ pl: "10px", color: myColors.ligthText, fontSize: 12 }}
      >
        {" "}
        View all events{" "}
      </Typography>
      <IconButton
        color="primary"
        sx={{ p: "0px", color: myColors.ligthText }}
        aria-label="directions"
      >
        <NavigateNext />
      </IconButton>
    </Paper>
  );
}
