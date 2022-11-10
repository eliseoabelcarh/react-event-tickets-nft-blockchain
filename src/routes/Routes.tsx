import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { pathsDrawer } from "../data/ItemsDrawer";
import AidropsScreen from "../pages/airdrops/AirdropsScreen";
import CollectiblesScreen from "../pages/collectibles/CollectiblesScreen";
import CustomersScreen from "../pages/customers/CustomersScreen";
import DashboardScreen from "../pages/dashboard/DashboardScreen";
import EventsScreen from "../pages/events/EventsScreen";
import OrdersScreen from "../pages/orders/OrdersScreen";
import SettingsScreen from "../pages/settings/SettingsScreen";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path={pathsDrawer.HOME}
        element={<Navigate replace to={pathsDrawer.DASHBOARD} />}
      />
      <Route path={pathsDrawer.DASHBOARD} element={<DashboardScreen />} />
      <Route path={pathsDrawer.EVENTS} element={<EventsScreen />} />
      <Route path={pathsDrawer.ORDERS} element={<OrdersScreen />} />
      <Route path={pathsDrawer.CUSTOMERS} element={<CustomersScreen />} />
      <Route path={pathsDrawer.COLLECTIBLES} element={<CollectiblesScreen />} />
      <Route path={pathsDrawer.AIRDROPS} element={<AidropsScreen />} />
      <Route path={pathsDrawer.SETTINGS} element={<SettingsScreen />} />
    </Routes>
  );
};
