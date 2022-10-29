import React from "react";
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

export type ItemProps = {
  id: string;
  icon: JSX.Element;
  active?: boolean;
};

export type CategoryProps = {
  id: string;
  children: ItemProps[];
};

export const categoriesDrawer: CategoryProps[] = [
  {
    id: "Build",
    children: [
      {
        id: "Authentication",
        icon: <HomeIcon />,
        active: true,
      },
      { id: "Database", icon: <DnsRoundedIcon />, active: false },
      { id: "Storage", icon: <PermMediaOutlinedIcon />, active: false },
      { id: "Hosting", icon: <PublicIcon />, active: false },
      { id: "Functions", icon: <SettingsEthernetIcon />, active: false },
      {
        id: "Machine learning",
        icon: <SettingsInputComponentIcon />,
        active: false,
      },
    ],
  },
  {
    id: "Quality",
    children: [
      { id: "Analytics", icon: <SettingsIcon />, active: false },
      { id: "Performance", icon: <TimerIcon />, active: false },
      { id: "Test Lab", icon: <PhonelinkSetupIcon />, active: false },
    ],
  },
];
