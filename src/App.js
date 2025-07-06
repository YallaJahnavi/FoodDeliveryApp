// App.js
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

// ⬇️ Core layout + common components
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

// ⬇️ Lazy‑loaded components
// const Grocery = lazy(() => import("./components/Grocery"));   // (kept commented‑out as before)
const About = lazy(() => import("./components/AboutUs"));

// ⬇️ Auth pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// ⬇️ State / context
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { UserContextProvider } from "./utils/UserContext";

// -------------------------------------------------------------
// Layouts
// -------------------------------------------------------------
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

// -------------------------------------------------------------
// Router
// -------------------------------------------------------------
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const appRouter = createBrowserRouter([
  // 1️⃣ Public (no header) routes
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

  // 2️⃣ Authenticated (header) routes
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

      // ✅ Track order routes — static & dynamic
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

// -------------------------------------------------------------
// Mount React app
// -------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
