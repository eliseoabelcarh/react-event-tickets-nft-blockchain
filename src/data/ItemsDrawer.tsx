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
  active?: boolean;
};

export type CategoryProps = {
  id: string;
  children: ItemProps[];
};

export const itemsDrawer = {
  //** Categories */
  GENERAL: "General",
  NFT: "NFT",
  PERSONAL: "Personal",
  //** Items */
  DASHBOARD: "Dashboard",
  EVENTS: "Events",
  ORDERS: "Orders",
  CUSTOMERS: "Customers",
  COLLECTIBLES: "Collectibles",
  AIRDROPS: "Airdrops",
  SETTINGS: "Settings",
};

export let categoriesDrawer: CategoryProps[] = [
  {
    id: itemsDrawer.GENERAL,
    children: [
      { id: itemsDrawer.DASHBOARD, active: true },
      { id: itemsDrawer.EVENTS, active: false },
      { id: itemsDrawer.ORDERS, active: false },
      { id: itemsDrawer.CUSTOMERS, active: false },
    ],
  },
  {
    id: itemsDrawer.NFT,
    children: [
      { id: itemsDrawer.COLLECTIBLES, active: false },
      { id: itemsDrawer.AIRDROPS, active: false },
    ],
  },
  {
    id: itemsDrawer.PERSONAL,
    children: [{ id: itemsDrawer.SETTINGS, active: false }],
  },
];

export const pathsDrawer = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  EVENTS: "/events",
  ORDERS: "/orders",
  CUSTOMERS: "/customers",
  COLLECTIBLES: "/collectibles",
  AIRDROPS: "/airdrops",
  SETTINGS: "/settings",
};

export function getPathDrawer(itemDrawer: string) {
  switch (itemDrawer) {
    case itemsDrawer.DASHBOARD:
      return pathsDrawer.DASHBOARD;
    case itemsDrawer.EVENTS:
      return pathsDrawer.EVENTS;
    case itemsDrawer.ORDERS:
      return pathsDrawer.ORDERS;
    case itemsDrawer.CUSTOMERS:
      return pathsDrawer.CUSTOMERS;
    case itemsDrawer.COLLECTIBLES:
      return pathsDrawer.COLLECTIBLES;
    case itemsDrawer.AIRDROPS:
      return pathsDrawer.AIRDROPS;
    case itemsDrawer.SETTINGS:
      return pathsDrawer.SETTINGS;
    default:
      return pathsDrawer.HOME;
  }
}

export function getIcon(type: string) {
  switch (type) {
    case itemsDrawer.DASHBOARD:
      return <HomeIcon />;
    case itemsDrawer.EVENTS:
      return <DnsRoundedIcon />;
    case itemsDrawer.ORDERS:
      return <PermMediaOutlinedIcon />;
    case itemsDrawer.CUSTOMERS:
      return <PublicIcon />;
    case itemsDrawer.COLLECTIBLES:
      return <SettingsEthernetIcon />;
    case itemsDrawer.AIRDROPS:
      return <SettingsInputComponentIcon />;
    case itemsDrawer.SETTINGS:
      return <SettingsIcon />;
    default:
      return <HomeIcon />;
  }
}
