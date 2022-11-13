import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, Box, Card, Paper } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { myColors } from "../../helpers/myColors";
import { type } from "@testing-library/user-event/dist/types/setup/directApi";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const getButtonToClick = (title: string) => (
  <Paper
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: "0.56rem",
      border: "1px solid rgb(255 255 255 / 10%)",
      paddingTop: "0.2rem",
      paddingBottom: "0.2rem",
      paddingLeft: "1rem",
      paddingRight: 1,
      background: `linear-gradient(180deg, ${myColors.buttons.outlined.backgroundBase} 30%, ${myColors.buttons.outlined.backgroundOverlay} 150%);`,
      color: myColors.ligthText,
      "&:hover": {
        background: `linear-gradient(180deg, ${myColors.buttons.outlined.backgroundBaseHover} 0%, ${myColors.buttons.outlined.backgroundOverlayHover} 130%);`,
      },
    }}
  >
    {title} <KeyboardArrowDownIcon sx={{ marginLeft: 1 }} />
  </Paper>
);

const buttonItems = [
  {
    title: "Edit",
    icon: <EditIcon />,
    handleClick: () => {
      console.log("Edit");
    },
  },

  {
    title: "Archive",
    icon: <ArchiveIcon />,
    handleClick: () => {
      console.log("Archive");
    },
  },
];

type childrenItem = {
  title: string;
  icon?: React.ReactNode;
  handleClick: () => void;
};

type Props = {
  title?: string;
  buttonToClickChildren?: React.ReactNode;
  childrenItems?: Array<childrenItem>;
};
export default function OptionsButton({
  title = "Options",
  buttonToClickChildren,
  childrenItems = buttonItems,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
        {buttonToClickChildren ? buttonToClickChildren : getButtonToClick(title)}
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {childrenItems.map((item, index) => (
          <MenuItem key={index} onClick={item.handleClick} disableRipple>
            {item.icon ? item.icon : null}
            {item.title}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
