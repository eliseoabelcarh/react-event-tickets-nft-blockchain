import React from "react";
import { useMediaQuery } from "@mui/material";
import Paperbase from "../Paperbase";
import { myColors } from "../../../helpers/myColors";
import Navigator from "../Navigator";
import { theme } from "../Theme";
import { CategoryProps } from "../../../data/ItemsDrawer";

type Props = {
  categoriesDrawer: CategoryProps[];
  children: React.ReactNode;
};

export default function LayoutUI({
  categoriesDrawer,
  children,
}: Props) {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navigator = (
    <Navigator
      PaperProps={{ style: { width: styles.drawerWidth } }}
      variant={isSmUp ? "permanent" : "temporary"}
      open={mobileOpen}
      onClose={isSmUp ? () => {} : handleDrawerToggle}
      logoContainerStyle={styles.logoContainerStyle}
      isMobile={!isSmUp}
      categoriesDrawer={categoriesDrawer}
      sxDrawer={
        isSmUp
          ? {
              display: { sm: "block", xs: "none" },
              backgroundColor: "transparent",
            }
          : { backgroundColor: styles.overlayDrawer }
      }
    />
  );
  return (
    <Paperbase
      theme={theme}
      drawerWidth={styles.drawerWidth}
      navigator={navigator}
      handleDrawerToggle={handleDrawerToggle}
      stylesBody={isSmUp ? styles.stylesBodyIsSmUp : styles.stylesBodyIsSmDown}
      children={children}
    />
  );
}

const styles = {
  overlayDrawer: "rgba(8,22,39,0.6)",
  drawerWidth: 230,//256 original
  logoContainerStyle: {
    fontSize: 22,
    color: myColors.ligthText,
    height: "60px",
  },
  stylesBodyIsSmUp: {
    display: "flex",
    minHeight: "100vh",
    width: "1028px",
    boxShadow: "0 0 20px 0 rgba(0,0,0,0.8)",
    background: `radial-gradient(circle, ${myColors.backgroundBlueDarker} 0%, ${myColors.backgroundOverlay} 200%)`,
  },
  stylesBodyIsSmDown: {
    display: "flex",
    //marginTop: "35px",// para bajar headertitle
    minHeight: "100vh",
    background: `radial-gradient(circle, ${myColors.backgroundBlueDarker} 0%, ${myColors.backgroundOverlay} 200%)`,
  },
};
