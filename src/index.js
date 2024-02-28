import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import * as obj from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";

const AppLayout = () => (
  <>
    <Header />
    {/*outlet*/}
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            // element: <Profile/>
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#Root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
