import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import {Menu,Shop, AccountBox, Notifications, Logout} from "@mui/icons-material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { myColors } from "../../helpers/myColors";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import OptionsButton from "../buttons/OptionsButton";
import { Paper } from "@mui/material";

const sellerPortalOptions = {
  title: "Seller Portal",
  options: [
    {
      title: "Marketplace",
      icon: <Shop />,
      handleClick: () => console.log("Go to MarketPlace"),
    },
  ],
};
const MyAccountOptions = {
  title: "My Account",
  options: [
    {
      title: "My Profile",
      icon: <AccountBox />,
      handleClick: () => console.log("Go to My Profile"),
    },
    {
      title: "Logout",
      icon: <Logout />,
      handleClick: () => console.log("Logout"),
    },
  ],
  buttonToShow: () => (
    <Paper sx={{ p: 0, backgroundColor: "transparent" }}>
      <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
    </Paper>
  ),
};

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;
  const { itemActive } = useSelector((state: RootState) => state.drawerItems);

  const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  };

  return (
    <React.Fragment>
      <AppBar
        color="primary"
        position="sticky"
        elevation={0}
        style={itemCategory}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="secondary"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <Menu/>
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                {itemActive.childId}
              </Typography>
            </Grid>
            <Grid item xs />

            <Grid item>
              <OptionsButton
                title={sellerPortalOptions.title}
                childrenItems={sellerPortalOptions.options}
              />
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="warning">
                    <Notifications color="secondary" />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <OptionsButton
                buttonToClickChildren={MyAccountOptions.buttonToShow()}
                title={MyAccountOptions.title}
                childrenItems={MyAccountOptions.options}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
