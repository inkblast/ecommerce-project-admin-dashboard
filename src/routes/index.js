import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Header from "../components/Header";
import Home from "../containers/Home"
import OrderManagement from "../containers/OrderManagement"
import Deliveries from "../containers/Deliveries";


export default function Routs() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route exact path="/header" component={orderManagement} />*/}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/order-management" element={<OrderManagement />} />
        <Route exact path="/delivery" element={<Deliveries />} />
      </Routes>
    </BrowserRouter>
  );
}
