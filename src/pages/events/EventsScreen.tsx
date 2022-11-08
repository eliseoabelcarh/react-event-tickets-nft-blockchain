import React, {useEffect} from 'react'
import EventsUI from './EventsUI'
import { useSelector, useDispatch } from "react-redux";
import { itemsDrawer } from "../../data/ItemsDrawer";
import { setItemActive } from "../../redux/slices/DrawerItems";

export default function EventsScreen() {

  const dispatch = useDispatch();


  useEffect(() => {
    //set active according to the path and screen
     dispatch(setItemActive({categoryId: itemsDrawer.GENERAL, childId: itemsDrawer.EVENTS}))
  }, []);
  return (
    <EventsUI/>
  )
}
