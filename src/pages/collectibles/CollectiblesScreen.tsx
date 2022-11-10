import React, {useEffect} from 'react'
import CollectiblesUI from './CollectiblesUI'
import { useSelector, useDispatch } from "react-redux";
import { itemsDrawer } from "../../data/ItemsDrawer";
import { setItemActive } from "../../redux/slices/DrawerItems";

export default function CollectiblesScreen() {

  const dispatch = useDispatch();


  useEffect(() => {
    //set active according to the path and screen
     dispatch(setItemActive({categoryId: itemsDrawer.NFT, childId: itemsDrawer.COLLECTIBLES}))
  }, []);
  
  return (
    <CollectiblesUI/>
  )
}
