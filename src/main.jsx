import { Children, Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import UnavilData from "./components/UnavilData/UnavilData.jsx";
import UserReactRouter from "./components/UserReactRouter/UserReactRouter.jsx";
import User2ReactUse from "./components/User2ReactUse/User2ReactUse.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

// 10. we will use here 2 types of data loading. The 10.1.0 is data loading method from react router and 10.2.0 is data loading from react router using use()

// 10.1.0 data loading method from react router using loader() &useLoaderData()

// 10.2.0 data loading method using suspense from react use method using use() & suspense

// 10.2.1 fetch the data using fetch()
const user2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// 3.
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: UnavilData }, // যখন "/" এ থাকে তখন default ভাবে UnavilData component কে দেখাবে।
      { path: "home", Component: Home }, //আর index এর ভেতরে কোন কোন data গুলো show করব i.e home, mobiles, laptops onclick এর মাধ্যমে দেখবে।
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },

      /* 10.1.1 using loader() */
      {
        path: "UserReactRouter",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: UserReactRouter,
      },
      // 10.2.2 as we need to pass the user2Promise as props so we create element instead of previously created component using
      {
        path: "User2ReactUse",
        element: (
          <Suspense fallback={<span>Loading . . . . . </span>}>
            <User2ReactUse user2Promise={user2Promise}></User2ReactUse>
          </Suspense>
        ),
      },

      // 12.0 requirement is create a show detail button to show the specific info of specific users dynamically that's why created a component first, then create the path dynamically from documentation of routing dynamic segments.

      {
        path: "users/:userId",
        // 13.0 loading() method to fetch the data and get the data by dynamic id that is created in path.
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      }, // here, to show the details of every users we need uniq value which is id, so as per documentation we use /users/ which is static and :userId to make it dynamic. here (:) is used for dynamic value. এটা করা হয়েছে কারন আমরা loading() fetch data আনার জন্য dynamic ভাবে id টা ধরব।
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

/*  5. now in browser search bar paste the following link by manually changing the page
 i. http://localhost:5173/
 ii. http://localhost:5173/mobiles
 iii. http://localhost:5173/laptops 

 Now see that the header is fixed but mobiles, laptop page is changed
 */
