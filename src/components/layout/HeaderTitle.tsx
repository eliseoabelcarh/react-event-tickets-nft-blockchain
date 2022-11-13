import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { myColors } from "../../helpers/myColors";
import { CssBaseline } from "@mui/material";
import OutlinedButton from "../buttons/OutlinedButton";

const lightColor = "rgba(255, 255, 255, 0.7)";

type Props = {
  title?: string;
};

const toolTipText = "Click to see help and tutorials";

export default function HeaderTitle({ title }: Props) {
  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="transparent" //primary
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: myColors.ligthText,
                }}
              >
                {title ? title : ""}
              </Typography>
            </Grid>
            <Grid item xs />
            <Grid item>
              <OutlinedButton title="Docs" />
            </Grid>

            <Grid item>
              <Tooltip title={toolTipText}>
                <IconButton color="secondary">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
