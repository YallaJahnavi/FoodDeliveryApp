// App.js
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import MyOrders from "./components/MyOrders";
import Checkout from "./components/Checkout";
import Order from "./components/Order";
import Track from "./components/Track";          // Track order page
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Error from "./components/Error";


// const Grocery = lazy(() => import("./components/Grocery"));   // (kept commented‑out as before)
const About = lazy(() => import("./components/AboutUs"));


import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";


import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { UserContextProvider } from "./utils/UserContext";




const AppLayout = () => (
  <Provider store={appStore}>
    <UserContextProvider>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContextProvider>
  </Provider>
);

const MinimalLayout = () => (
  <div>
    <Outlet />
  </div>
);




import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      { path: "/",        element: <Landing /> },
      { path: "/login",   element: <Login /> },
      { path: "/register",element: <Register /> }
    ],
    errorElement: <Error />,
  },

 
  {
    path: "/home",
    element: <AppLayout />,
    children: [
      { path: "/home",                      element: <Body /> },
      { path: "/home/about",                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> },
      { path: "/home/contact",              element: <Contact /> },
      { path: "/home/restaurants/:resId",   element: <RestaurantMenu /> },
      { path: "/home/cart",                 element: <Cart /> },
      { path: "/home/my-orders",            element: <MyOrders /> },

      
      { path: "/home/track",                element: <Track /> },          // (kept for backward compatibility)
      { path: "/home/track/:orderId",       element: <Track /> },          // (new dynamic route)

      { path: "/home/checkout",             element: <Checkout /> },
      { path: "/home/order",                element: <Order /> },

      // (duplicate relative “order” route retained to avoid breaking any existing links)
      { path: "order",                      element: <Order /> },

      { path: "/home/profile",              element: <Profile /> },
      { path: "/home/edit-profile",         element: <EditProfile /> },
    ],
  },
]);



       
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
