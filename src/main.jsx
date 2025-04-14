import { Children, Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import UnavilData from "./components/UnavilData/UnavilData.jsx";

// 3.
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: UnavilData }, // যখন "/" এ থাকে তখন default ভাবে UnavilData component কে দেখাবে।
      { path: "home", Component: Home }, //আর index এর ভেতরে অন্য data গুলো i.e home, mobiles, laptops onclick এর মাধ্যমে দেখবে।
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
    ],
  },
]);

// 4. now pass the router as props to <RouterProvider>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>
);

/*  5. now in browser search bar paste the following link
 i. http://localhost:5173/
 ii. http://localhost:5173/mobiles
 iii. http://localhost:5173/laptops 

 Now see that the header is fixed but mobiles, laptop page is changed
 */
