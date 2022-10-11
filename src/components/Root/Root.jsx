import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;