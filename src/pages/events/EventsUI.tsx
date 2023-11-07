import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Card,
  Divider,
  Typography,
  Toolbar,
  AppBar,
  Stack,
} from "@mui/material";
import HeaderTitle from "../../components/layout/HeaderTitle";
import { itemsDrawer } from "../../data/ItemsDrawer";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import OptionsButton from "../../components/buttons/OptionsButton";
import SearchBox from "../../components/SearchBox";
import DatePickerRange, { Range } from "../../components/DatePickerRange";
import GenericBox from "../../components/GenericBox";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ModalPop from "../../components/ModalPop";
import OutlinedButton from "../../components/buttons/OutlinedButton";

export default function EventsUI() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [rangeSelected, setRangeSelected] = useState<Range>({} as Range);

  const handleRangeSelected = (range: Range) => {
    console.log("handleRangeSelected", range);
    setRangeSelected(range);
  };
  const resetRange = () => {
    console.log("reset");
  };

  const applyRangeSelected = () => {
    handleClose();
    console.log("applyRangeSelected");
  };

  const DatePickerRangeRef = React.forwardRef((props, ref) => (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <DatePickerRange handleRangeSelected={handleRangeSelected} />
      <Divider sx={{ mt: 3, backgroundColor: "transparent" }} />
      <OutlinedButton title="Aplicar" handleClick={applyRangeSelected} />
    </Stack>
  ));

  const getModalDateRange = () => (
    <ModalPop
      open={openModal}
      handleClose={handleClose}
      childModal={<DatePickerRangeRef />}
    />
  );

  return (
    <React.Fragment>
      {getModalDateRange()}
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "transparent" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={4.2}>
            <SearchBox placeholderText="Search by event or ticket type" />
          </Grid>
          <Grid item xs={6} sm={2.3}>
            <GenericBox
              text="Date Range"
              icon={<DateRangeIcon sx={{ fontSize: "1rem" }} />}
              handleClick={handleOpen}
            />
          </Grid>
          <Grid item xs={6} sm={2.3}>
            <GenericBox text="All events" />
          </Grid>
          <Grid item xs />
          <Grid item xs={6} sm={2.7}>
            <PrimaryButton />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={12}>
            <SearchBox placeholderText="Search by event or ticket type" />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
