import React from "react";
import { Box, Paper } from "@mui/material";
import Paperbase from "../../components/sellerHomeComponents/Paperbase";

type Props = {};

const styles = {
  systemProp: {
    // width: "75%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // minHeight: "100vh",
  },
  box: {

  },
};

export default function SellerHomeUI({}: Props) {
  return (
      <Paperbase />
  );
}
