import React, {useEffect} from 'react'
import SettingsUI from './SettingsUI'
import { useSelector, useDispatch } from "react-redux";
import { itemsDrawer } from "../../data/ItemsDrawer";
import { setItemActive } from "../../redux/slices/DrawerItems";

export default function SettingsScreen() {

  const dispatch = useDispatch();


  useEffect(() => {
    //set active according to the path and screen
     dispatch(setItemActive({categoryId: itemsDrawer.PERSONAL, childId: itemsDrawer.SETTINGS}))
  }, []);
  
  return (
    <SettingsUI/>
  )
}
