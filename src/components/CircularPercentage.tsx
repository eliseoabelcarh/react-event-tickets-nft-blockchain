import React from "react";
import { Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { myColors } from "../helpers/myColors";

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


type Props = {
  percentage?: number;
  title?: string;
  subtitle?: string;
};

export default function CircularPercentage({
  percentage = 75,
  title = "Total Tickets Sold",
  subtitle = "710 / 1040",
}: Props) {
  return (
    <Stack display="block">
      <Item>
        <Typography sx={{ mr: 1, fontWeight: "bold" }} variant="subtitle2">
          {title}
        </Typography>
      </Item>

      <ItemCircularProgress>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            textColor: myColors.ligthText,
            textSize: "20px",
            pathColor: `rgba(15,82,186,1)`,
            trailColor: `rgba(81,87,99,0.3)`,
            backgroundColor: myColors.ligthText,
          })}
        >
          <div style={{ fontSize: "1.5rem" }}>{percentage}%</div>
          <div style={{ fontSize: "10px", marginTop: 2 }}>{subtitle}</div>
        </CircularProgressbarWithChildren>
      </ItemCircularProgress>
    </Stack>
  );
}
