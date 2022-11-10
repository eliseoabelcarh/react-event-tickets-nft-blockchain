import React, {useEffect} from 'react'
import CustomersUI from './CustomersUI'
import { useSelector, useDispatch } from "react-redux";
import { itemsDrawer } from "../../data/ItemsDrawer";
import { setItemActive } from "../../redux/slices/DrawerItems";

export default function CustomersScreen() {

  const dispatch = useDispatch();


  useEffect(() => {
    //set active according to the path and screen
     dispatch(setItemActive({categoryId: itemsDrawer.GENERAL, childId: itemsDrawer.CUSTOMERS}))
  }, []);

  
  return (
    <CustomersUI/>
  )
}
