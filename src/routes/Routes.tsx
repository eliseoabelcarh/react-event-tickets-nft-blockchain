import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { pathsDrawer } from "../data/ItemsDrawer";
import DashboardScreen from "../pages/dashboard/DashboardScreen";
import EventsScreen from "../pages/events/EventsScreen";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path={pathsDrawer.HOME}
        element={<Navigate replace to={pathsDrawer.DASHBOARD} />}
      />
      <Route path={pathsDrawer.DASHBOARD} element={<DashboardScreen />} />
      <Route path={pathsDrawer.EVENTS} element={<EventsScreen />} />
    </Routes>
  );
};
