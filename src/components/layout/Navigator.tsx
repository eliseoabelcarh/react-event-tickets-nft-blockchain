import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { myColors } from "../../helpers/myColors";
import { paperClasses } from "@mui/material/Paper";
import { CategoryProps, getPathDrawer, pathsDrawer } from "../../data/ItemsDrawer";
import { getIcon } from "../../data/ItemsDrawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { setItemActive } from "../../redux/slices/DrawerItems";
import { useDispatch } from "react-redux";
type Props = {
  categoriesDrawer: CategoryProps[];
  PaperProps: any;
  variant: "permanent" | "persistent" | "temporary";
  isMobile: boolean;
  open: boolean;
  logoContainerStyle: React.CSSProperties;
  sxDrawer: any;
  onClose: () => void;
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
  } = props;

  const dispatch  = useDispatch()
  const {itemActive} = useSelector((state: RootState) => state.drawerItems);

  return (
    <Drawer
      variant={variant}
      sx={{
        [`& .${paperClasses.root}`]: isMobile ? styles.styleDrawer : {position: "relative"},
        ...sxDrawer,
      }}
      PaperProps={PaperProps}
      open={open}
      onClose={onClose}
      classes={{
        paper: paperClasses.root,
      }}
    >
      <List disablePadding>
        <ListItem
          sx={{
            ...styles.item,
            ...styles.itemCategory,
            ...logoContainerStyle,
            backgroundColor: myColors.primary.main,
            "&:hover": {
              backgroundColor: myColors.primary.main,
            },
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={pathsDrawer.HOME}
          >
            EVENTS
          </Link>
        </ListItem>

        <Divider sx={{ mt: 3, backgroundColor: "transparent" }} />
        {categoriesDrawer.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "transparent" }}>
            {children.map(({ id: childId, active }, index) => (
              <Link
                key={index}
                style={{ textDecoration: "none", color: "white" }}
                to={getPathDrawer(childId)}
              >
                <ListItem disablePadding key={childId}>
                  <ListItemButton
                    selected={itemActive.categoryId === id && itemActive.childId === childId}
                    sx={styles.item}
                    onClick={() => {
                      dispatch(setItemActive({categoryId: id, childId: childId}))
                    }}
                  >
                    <ListItemIcon>{getIcon(childId)}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
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

};
