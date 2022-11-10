import React, { useEffect } from "react";
import DashboardUI from "./DashboardUI";
import { useNavigate } from "react-router-dom";
import { pathsDrawer } from "../../data/ItemsDrawer";
import { useSelector, useDispatch } from "react-redux";
import { itemsDrawer } from "../../data/ItemsDrawer";
import { setItemActive } from "../../redux/slices/DrawerItems";

const eventsSalesInitial = [
  { title: "Event 1", percentage: 40 },
  { title: "Event 2", percentage: 81 },
  { title: "Event 3", percentage: 61 },
  { title: "Event 4", percentage: 11 },
  { title: "Event 5", percentage: 21 },
];

const statisticsCards = [
  {
    title: "New Orders",
    total: 45,
    percentage: 23,
    timing: "(vs last month)",
  },
  {
    title: "Numbers of Events",
    total: 10,
    percentage: 13,
    timing: "(vs last month)",
  },
  {
    title: "New Customers",
    total: 55,
    percentage: 2,
    timing: "(vs last month)",
  },
];

type Props = {};

export default function DashboardScreen({}: Props) {
  const dispatch = useDispatch();

  //usestate for eventSales
  const [eventsSales, setEventsSales] = React.useState(eventsSalesInitial);

  useEffect(() => {
    //set active according to the path and screen
    dispatch(
      setItemActive({
        categoryId: itemsDrawer.GENERAL,
        childId: itemsDrawer.DASHBOARD,
      })
    );
  }, []);

  const VIEW_EVENTS_TEXT = "View all events";
  const PLACEHOLDER_FILTER_BY_TEXT = "Filter by event";

  const navigate = useNavigate();

  const handleViewEvents = () => {
    navigate(pathsDrawer.EVENTS);
  };
  const handleChangeFilterBoxInputText = (text: string) => {
    console.log("handleChangeFilterBoxInputText:::::", text);
    const filteredEvents = eventsSalesInitial.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setEventsSales(filteredEvents);
  };
  return (
    <DashboardUI
      statisticsCards={statisticsCards}
      eventsSales={eventsSales}
      handleViewEvents={handleViewEvents}
      viewEventsText={VIEW_EVENTS_TEXT}
      placeholderFilterByText={PLACEHOLDER_FILTER_BY_TEXT}
      handleChangeFilterBoxInputText={handleChangeFilterBoxInputText}
    />
  );
}
