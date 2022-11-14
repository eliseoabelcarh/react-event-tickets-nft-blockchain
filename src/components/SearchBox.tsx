import React from "react";
import { myColors } from "../helpers/myColors";
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

type Props = {
  handleViewAll?: () => void;
  viewAllText?: string;
  placeholderText?: string;
  handleChangeInputText?: (eventTargetValue: string) => void;
 
};

export default function SearchBox({
  handleViewAll,
  viewAllText,
  placeholderText,
  handleChangeInputText,
  
}: Props) {
  return (
   
      <Paper
        component="form"
        sx={{
          p: "2.5px 8px",
          display: "flex",
          alignItems: "center",
          //width: '75%',
          backgroundColor: myColors.cardHeaderBackgroundColor,
          borderRadius: "0.2rem",
        }}
      >
        {" "}
        <IconButton
          type="button"
          sx={{ p: "0px", color: myColors.ligthText }}
          aria-label="search"
          disabled={false}
        >
          <SearchIcon sx={{fontSize:'1rem'}} />
        </IconButton>
        <InputBase
          sx={{ p:0, ml: 1, flex: 1, color: myColors.ligthText, fontSize: "0.8rem" }}
          placeholder={placeholderText}
          inputProps={{ "aria-label": placeholderText }}
          //onChange event target
          onChange={(event) => {
            console.log("searchbox", event.target.value);
            handleChangeInputText
              ? handleChangeInputText(event.target.value)
              : null;
          }}
        />


        { viewAllText ? 
        (
        <>
        <Divider sx={{ height: 18, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "0px", color: myColors.ligthText }}
          aria-label="directions"
          onClick={handleViewAll}
        >
          <Typography
            variant="caption"
            sx={{ pl: "10px", color: myColors.ligthText, fontSize: 12 }}
          >
            {" "}
            {viewAllText}{" "}
          </Typography>
          <NavigateNext />
        </IconButton>
        </>
        )
        : null}



      </Paper>
  
  );
}
