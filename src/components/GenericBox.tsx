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
  ButtonBase,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ExpandMore from "@mui/icons-material/ExpandMore";

type Props = {
  text?: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
};

export default function GenericBox({ text, handleClick, icon }: Props) {
  return (
    <ButtonBase
      style={{ width: "100%" }}
      sx={{
        p: 0,
        m: 0,
        display: "flex",
      }}
      onClick={
        handleClick
          ? handleClick
          : () => {
              console.log("no click handler");
            }
      }
    >
      <Paper
        sx={{
          p: "8px 8px",
          m: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: myColors.cardHeaderBackgroundColor,
          color: myColors.ligthText,
          borderRadius: "0.2rem",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: myColors.ligthText,
            fontSize: "0.7rem",
            pl: 1,
            pr: 1,
            textAlign: "center",
            //padding: "0.5rem",
          }}
        >
          {text ? text : "Some text"}
        </Typography>

        {icon ? icon : <ExpandMore sx={{fontSize: '1rem'}} />}
      </Paper>
    </ButtonBase>
  );
}
