import React, { useState } from "react";
import FreeFire from "./Components/FreeFire";
import ListRender from "./Components/ListRender";
import ApiCall from "./Components/ApiCall";
import ApiCall2 from "./Components/ApiCall2";
import ListCall from "./Components/ListCall";
import PropsComp from "./Components/PropsComp";
import InputComp from "./Components/InputComp";
import ProfileName from "./Components/ProfileName";
import ProductComp from "./Components/Page/ProductComp";
import AboutComp from "./Components/Page/AboutComp";
import HomeComp from "./Components/Page/HomeComp";
// import VijayProps from "./Components/VijayProps"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GloceryList from "./Components/GloceryList";
import GetPost from "./Components/GetPost";
import ProductPage from "./Components/ProductPage";
import Usefetch from "./Components/UseFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import CartComp from "./Components/Context/CartComp";
import ProductCart from "./Components/Context/ProductCart";
import { ContextProvider } from "./Components/Context/CounterContext";

function App() {
  return (
    //   // <BrowserRouter>

    //    {/* <h1>Vijay</h1> */}
    //    {/* <FreeFire/> */}
    //    {/* <ListRender/> */}
    //    {/* <ApiCall/> */}
    //    {/* <ApiCall2/>

    //    {/*<ListCall/> */}

    //    {/* <PropsComp/> */}
    //    {/* <InputComp/> */}
    //    {/* <ProfileName/> */}

    //    {/* <Link to="/">home</Link>
    //    <Link to="/product">product</Link>
    //    <Link to="/about">about</Link>

    //    <Routes>

    //     <Route path="/"  element={<HomeComp/>}/>
    //     <Route  path="/product" element={<ProductComp/>}/>
    //     <Route path="/about"  element={<AboutComp/>}/>

    //    </Routes>

    //    */}
    //   // </BrowserRouter>
    <GloceryList/>
    // <ProductPage/>
    // <ContextProvider>
    //   <CartComp />
    //   <ProductCart />
    // </ContextProvider>

    // <GetPost/>
  );
}

export default App;
