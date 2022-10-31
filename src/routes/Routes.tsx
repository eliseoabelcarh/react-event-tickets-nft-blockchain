import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { pathsDrawer } from "../data/ItemsDrawer";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path={pathsDrawer.HOME}
        element={<Navigate replace to={pathsDrawer.DASHBOARD} />}
      />
      <Route path={pathsDrawer.DASHBOARD} element={<Dashboard />} />
      <Route path={pathsDrawer.EVENTS} element={<Events />} />
    </Routes>
  );
};
