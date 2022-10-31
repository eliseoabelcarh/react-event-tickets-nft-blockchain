import React from "react";
import SellerUI from "./SellerUI";
import {
  categoriesDrawer,
  CategoryProps,
  ItemProps,
} from "../../../data/ItemsDrawer";

/** Redux */
import type { RootState } from "../../../redux/Store";
import { useSelector, useDispatch } from "react-redux";
import { setDrawerItems } from "../../../redux/slices/DrawerItems";

type Props = {
  children: React.ReactNode;
};

export default function SellerScreen({children}: Props) {
  const categoriesDrawer = useSelector(
    (state: RootState) => state.drawerItems.items
  );
  const dispatch = useDispatch();

  let listaItemsDrawer = [...categoriesDrawer];
  const handleItemDrawerClick = (categoryID: string, childrenID: string) => {
    let newList = setActive(listaItemsDrawer, categoryID, childrenID);
    dispatch(setDrawerItems(newList));
  };

  return (
    <SellerUI
      categoriesDrawer={categoriesDrawer}
      handleItemDrawerClick={handleItemDrawerClick}
      children={children}
    />
  );
}

function setActive(
  listaItemsDrawer: CategoryProps[],
  categoryID: string,
  childrenID: string
): CategoryProps[] {
  let newList: CategoryProps[] = [];
  for (const category of listaItemsDrawer) {
    let newCategory: CategoryProps = {} as CategoryProps;
    newCategory.id = category.id;
    newCategory.children = [];
    for (const children of category.children) {
      let newChildren: ItemProps = {} as ItemProps;
      newChildren.id = children.id;
      if (category.id === categoryID && children.id === childrenID) {
        newChildren.active = true;
      } else {
        newChildren.active = false;
      }
      newCategory.children.push(newChildren);
    }
    newList.push(newCategory);
  }
  return newList;
}
