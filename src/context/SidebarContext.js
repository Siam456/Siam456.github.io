// import Cookies from "js-cookie";
import React, { useState, useMemo, createContext } from "react";

// create context
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const [routeIndex, setRouteIndex] = useState(0);

  const handleRouteIndex = (value) => {
    setRouteIndex(value);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleUpdater = () => setIsUpdate(!isUpdate);

  const value = useMemo(
    () => ({
      drawerOpen,
      toggleDrawer,
      closeDrawer,
      openDrawer,
      toggleUpdater,
      isUpdate,
      routeIndex,
      handleRouteIndex,
    }),

    [drawerOpen, isUpdate, routeIndex]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
