import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import * as obj from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Profile from "./components/Profile";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

import UserContext from "./utils/UserContext";

//redux stuff:
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//IMPORTING COMPONENT THAT NEED TO LAZY LOAD ⬇👇
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Shibam Patra",
    email: "svmiamin@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/*outlet*/}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "React Learner",
              email: "example@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#Root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
