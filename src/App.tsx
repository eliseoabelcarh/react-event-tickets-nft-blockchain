import * as React from "react";
import SellerScreen from "./components/layout/seller/SellerScreen";
import { MainRoutes } from "./routes/Routes";


export default function App() {
  return <SellerScreen children={<MainRoutes/>} />;
}
