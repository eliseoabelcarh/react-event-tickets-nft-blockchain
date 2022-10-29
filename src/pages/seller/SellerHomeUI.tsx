import React from "react";
import { useMediaQuery } from "@mui/material";
import Paperbase from "../../components/layout/Paperbase";
import { myColors } from "../../helpers/colors";
import Navigator from "../../components/layout/Navigator";
import { theme } from "../../components/layout/Theme";
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

type ItemProps = {
  id: string;
  icon: JSX.Element;
  active?: boolean;
};

type CategoryProps = {
  id: string;
  children: ItemProps[];
};

const categoriesDrawer: CategoryProps[] = [
  {
    id: "Build",
    children: [
      {
        id: "Authentication",
        icon: <HomeIcon />,
        active: true,
      },
      { id: "Database", icon: <DnsRoundedIcon /> },
      { id: "Storage", icon: <PermMediaOutlinedIcon /> },
      { id: "Hosting", icon: <PublicIcon /> },
      { id: "Functions", icon: <SettingsEthernetIcon /> },
      {
        id: "Machine learning",
        icon: <SettingsInputComponentIcon />,
      },
    ],
  },
  {
    id: "Quality",
    children: [
      { id: "Analytics", icon: <SettingsIcon /> },
      { id: "Performance", icon: <TimerIcon /> },
      { id: "Test Lab", icon: <PhonelinkSetupIcon /> },
    ],
  },
];

type Props = {};

export default function SellerHomeUI({}: Props) {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navigator = (
    <>
      {isSmUp ? null : (
        <Navigator
          PaperProps={{ style: { width: styles.drawerWidth } }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          logoContainerStyle={styles.logoContainerStyle}
          isMobile={true}
          categoriesDrawer={categoriesDrawer}
          sxDrawer={{}}
        />
      )}
      <Navigator
        PaperProps={{ style: { width: styles.drawerWidth } }}
        variant={isSmUp ? "permanent" : "temporary"}
        open={mobileOpen}
        onClose={isSmUp ? () => {} : handleDrawerToggle}
        logoContainerStyle={styles.logoContainerStyle}
        isMobile={isSmUp ? false : true}
        categoriesDrawer={categoriesDrawer}
        sxDrawer={isSmUp ? { display: { sm: "block", xs: "none" } } : {}}
      />
      {/* <Navigator
        PaperProps={{ style: { width: styles.drawerWidth } }}
        variant="permanent"
        open={mobileOpen}
        onClose={() => {}}
        logoContainerStyle={styles.logoContainerStyle}
        isMobile={false}
        categoriesDrawer={categoriesDrawer}
        sxDrawer={{ display: { sm: "block", xs: "none" } }}
      /> */}
    </>
  );

  return (
    <Paperbase
      theme={theme}
      drawerWidth={styles.drawerWidth}
      navigator={navigator}
      handleDrawerToggle={handleDrawerToggle}
      stylesBody={styles.stylesBody}
    />
  );
}

const styles = {
  drawerWidth: 256,
  logoContainerStyle: {
    fontSize: 22,
    color: myColors.ligthText,
    height: "60px",
  },
  stylesBody: {
    display: "flex",
    minHeight: "100vh",
    background: `radial-gradient(circle, ${myColors.blueDarker} 0%, ${myColors.overlay} 200%)`,
  },
};
