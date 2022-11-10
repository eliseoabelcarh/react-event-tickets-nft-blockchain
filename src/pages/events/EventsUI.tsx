import React from 'react'
import { Box, Grid, Card, Divider, Typography } from "@mui/material";
import HeaderTitle from '../../components/layout/HeaderTitle';
import { itemsDrawer } from '../../data/ItemsDrawer';
import PrimaryButton from '../../components/buttons/PrimaryButton';

export default function EventsUI() {
  return (
    <React.Fragment>
      <HeaderTitle title={itemsDrawer.EVENTS} />
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "transparent" }}>
        <PrimaryButton />
       </Box>
    </React.Fragment>


  )
}
