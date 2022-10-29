import React from "react";
import { useMediaQuery } from "@mui/material";
import Paperbase from "../../components/layout/Paperbase";
import { myColors } from "../../helpers/colors";
import Navigator from "../../components/layout/Navigator";
import { theme } from "../../components/layout/Theme";
import { CategoryProps } from "../../data/categoriesDrawer";

type Props = {
  categoriesDrawer: CategoryProps[];
  handleItemDrawerClick: (categoryID: string, childrenID:string) => void;
};

export default function SellerHomeUI({
  categoriesDrawer,
  handleItemDrawerClick,
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
      isMobile={isSmUp ? false : true}
      categoriesDrawer={categoriesDrawer}
      sxDrawer={isSmUp ? { display: { sm: "block", xs: "none" } } : {}}
      handleItemDrawerClick={handleItemDrawerClick}
    />
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
