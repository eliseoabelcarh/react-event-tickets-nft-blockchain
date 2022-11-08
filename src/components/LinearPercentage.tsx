import React from "react";
import { myColors } from "../helpers/myColors";
import { Typography, Box } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

type Props = {
  percentage?: number;
  title?: string;
  percentageColor?: string;
};

export default function LinearPercentage({
  percentage = 51,
  title = "event name",
  percentageColor
}: Props) {
  const getColorAccordingToPercentage = (percentage: number) => {
    return percentage > 80
      ? myColors.neons.greenNeon
      : percentage > 60
      ? myColors.neons.yellowNeon
      : percentage > 40
      ? myColors.neons.purpleNeon
      : percentage > 20
      ? myColors.neons.pinkNeon
      : myColors.neons.redNeon;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{
            marginTop: 1,
            marginBottom: 1,
            marginRight: 1,
            height: 5,
            borderRadius: 5,
            width: "100%",
            [`&.${linearProgressClasses.colorPrimary}`]: {
              backgroundColor: myColors.cardHeaderBackgroundColor,
            },
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: percentageColor? percentageColor: getColorAccordingToPercentage(percentage),
            },
          }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
            color: myColors.ligthText,
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          {" "}
          {percentage}%
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: myColors.ligthText,
          fontSize: "10px",
        }}
      >
        {title}
      </Typography>
    </>
  );
}
