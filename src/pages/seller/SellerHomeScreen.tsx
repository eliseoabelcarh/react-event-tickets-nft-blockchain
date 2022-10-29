import React from "react";
import SellerHomeUI from "./SellerHomeUI";
import { categoriesDrawer, CategoryProps } from "../../data/categoriesDrawer";

type Props = {};

export default function SellerHomeScreen({}: Props) {



  let listaItemsDrawer = [...categoriesDrawer];
  const handleItemDrawerClick = (categoryID: string, childrenID: string) => {
    console.log(categoryID, childrenID);
    setActive(listaItemsDrawer, categoryID, childrenID);
    console.log(listaItemsDrawer);
  };

  return (
    <SellerHomeUI
      categoriesDrawer={categoriesDrawer}
      handleItemDrawerClick={handleItemDrawerClick}
    />
  );
}

function setActive(
  listaItemsDrawer: CategoryProps[],
  categoryID: string,
  childrenID: string
) {
  listaItemsDrawer.forEach((category) => {
    if (category.id === categoryID) {
      category.children.forEach((child) => {
        child.id === childrenID
          ? (child.active = true)
          : (child.active = false);
      });
    }
  });
}
