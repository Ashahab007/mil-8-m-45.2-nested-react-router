import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router";
import Footer from "../Footer/Footer";
import "./Root.css";
import SideBar from "../SideBar/SideBar";

// see User guide nested route from react router
// এইটার concept টা হল একটা part fixed থাকবে। বাকি কিছু part change হবে। যেগুলা change হবে তা outlet এর মধ্যে থাকবে। like gmail.

// 1. first created Root component
const Root = () => {
  return (
    <div>
      {/* 2. now use the Header component which will be fixed i.e it will not change */}
      <Header></Header>

      {/* 6. Now import Link from react router to work as button which is same as href */}
      <Link to="/">Home</Link>
      <Link to="/mobiles">Mobiles</Link>
      <Link to="/laptops">Laptops</Link>
      <div className="dynamic-container">
        {/* 8. created sidebar component */}
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      {/* 
      with the the help of outlet we can see the changeable
      component i.e outlet is worked as window.
      */}

      {/* 7. created Footer component*/}
      <Footer></Footer>
    </div>
  );
};

export default Root;
