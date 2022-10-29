import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { myColors } from "../../helpers/colors";
import { paperClasses } from "@mui/material/Paper";
import { type } from "@testing-library/user-event/dist/types/setup/directApi";
import { CategoryProps } from "../../data/categoriesDrawer";

type Props = {
  categoriesDrawer: CategoryProps[];
  PaperProps: any;
  variant: "permanent" | "persistent" | "temporary";
  isMobile: boolean;
  open: boolean;
  logoContainerStyle: React.CSSProperties;
  sxDrawer: any;
  onClose: () => void;
  handleItemDrawerClick: (categoryID: string, childrenID: string) => void;
};

export default function Navigator(props: Props) {
  const {
    categoriesDrawer,
    PaperProps,
    variant,
    isMobile,
    open,
    logoContainerStyle,
    sxDrawer,
    onClose,
    handleItemDrawerClick,
  } = props;

  return (
    <Drawer
      variant={variant}
      sx={{
        [`& .${paperClasses.root}`]: isMobile ? styles.styleDrawer : {},
        backgroundColor: styles.overlayDrawer,
        ...sxDrawer,
      }}
      PaperProps={PaperProps}
      open={open}
      onClose={onClose}
    >
      <List disablePadding>
        <ListItem
          sx={{
            ...styles.item,
            ...styles.itemCategory,
            ...logoContainerStyle,
          }}
        >
          Paperbase
        </ListItem>

        <Divider sx={{ mt: 3, backgroundColor: "transparent" }} />

        {categoriesDrawer.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "transparent" }}>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  selected={active}
                  sx={styles.item}
                  onClick={() => handleItemDrawerClick(id, childId)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}

const styles = {
  item: {
    py: "10px",
    px: 3,
    color: myColors.ligthText,
    "&:hover, &:focus": {
      bgcolor: "rgba(255, 255, 255, 0.04)",
    },
  },

  itemCategory: {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
  },

  styleDrawer: {
    background:
      // `radial-gradient(circle, ${myColors.blueDarker} 0%, ${myColors.overlay} 70%)`,
      `linear-gradient(90deg, ${myColors.blueDarker} 0%, ${myColors.overlay} 150%)`,
  },
  overlayDrawer: "rgba(8,22,39,0.6)",
};
