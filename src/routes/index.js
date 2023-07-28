import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminBoard from '../containers/Dashboard/AdminBoard';
import Product from "../containers/Product/"
import Addproduct from '../containers/Product/Addproduct'
import Addcategory from '../containers/Product/Addcategory'
import Category from '../containers/Product/Category'
import Promotion from '../containers/Product/Promotion'
import AddPromotion from '../containers/Product/AddPromotion'


function Routs() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AdminBoard /> } />
        <Route path="/product" element={<Product /> } />
        <Route path="/product/addproduct" element={<Addproduct /> } />
        <Route path="/category/addcategory" element={<Addcategory /> } />
        <Route path="/promotion/addpromotion" element={<AddPromotion /> } />
        <Route path="/category" element={<Category /> } />
        <Route path="/promotion" element={<Promotion /> } />
      </Routes>
    </Router>
    </>
  );
}

export default Routs;