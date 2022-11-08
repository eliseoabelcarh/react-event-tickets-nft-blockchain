import React from "react";
import LayoutUI from "./LayoutUI";

/** Redux */
import type { RootState } from "../../../redux/Store";
import { useSelector, useDispatch } from "react-redux";
import { setDrawerItems } from "../../../redux/slices/DrawerItems";

type Props = {
  children: React.ReactNode;
};

export default function LayoutScreen({children}: Props) {
  const categoriesDrawer = useSelector(
    (state: RootState) => state.drawerItems.items
  );

  return (
    <LayoutUI
      categoriesDrawer={categoriesDrawer}
      children={children}
    />
  );
}