import React from "react";
import Header from "../Header/Header";
import { Link, NavLink, Outlet } from "react-router";
import Footer from "../Footer/Footer";
import "./Root.css";
import SideBar from "../SideBar/SideBar";

// see User guide nested route from react router
// এইটার concept টা হল একটা part fixed থাকবে। বাকি কিছু part change হবে। যেগুলা change হবে তা outlet এর মধ্যে থাকবে। like gmail.

// 1. first created Root component which will be according to work like App.jsx
const Root = () => {
  return (
    <div>
      {/* 2. now use the Header component which will be fixed i.e it will not change */}
      <Header></Header>

      {/* 6. Now import Link from react router to work as button which is same as href */}
      <div className="navigation-btn">
        {/* 9. Now use NavLink instead of Link. Because NavLink worked showing the active button. From documentation of NavLink it contains a hidden class active. By assigning styles in active u can change the active navigation button color. */}
        {/* <Link to="/">Home</Link> */}
        <NavLink to="/home">Home</NavLink>
        {/* <Link to="/mobiles">Mobiles</Link> */}
        <NavLink to="/mobiles">Mobiles</NavLink>
        {/* <Link to="/laptops">Laptops</Link> */}
        <NavLink to="/laptops">Laptops</NavLink>
      </div>
      <div className="dynamic-container">
        {/* 8. created sidebar component */}
        <SideBar></SideBar>
        <Outlet></Outlet>
        {/* Outlet is used to show the data dynamically upon clicking the navigation button which is coded in main.jsx by createBrowserRouter. By using createBrowserRouter we design the changeable section of the web page which works by using Outlet. Onclicking Home, Mobiles, Laptops with the the help of outlet we can see the changeable
      component.Remember, outlet is worked as window. */}
      </div>

      {/* 7. created Footer component*/}
      <Footer></Footer>
    </div>
  );
};

export default Root;
