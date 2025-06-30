import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Order from "./components/Order";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Lazy imports
//const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/AboutUs"));

// ✅ Auth pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// ✅ Context provider
import { UserContextProvider } from "./utils/UserContext";

// ✅ App layout with Header
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContextProvider>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContextProvider>
    </Provider>
  );
};

// ✅ App layout without Header (for landing/login/register)
const MinimalLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

// ✅ Router setup
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MinimalLayout />, // No header here
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
    errorElement: <Error />,
  },
  {
    path: "/home", // Swiggy clone main routes
    element: <AppLayout />,
    children: [
      { path: "/home", element: <Body /> },
      {
        path: "/home/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/home/contact", element: <Contact /> },
      { path: "/home/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/home/cart", element: <Cart /> },
      { path: "/home/checkout", element: <Checkout />},
      {
      path: "order",
      element: <Order />, // This is your Order.js component
    },

    ],
  },
]);

// ✅ Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
