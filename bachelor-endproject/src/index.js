import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styling/css/Home.css";
import "./styling/css/global.css";
import "./styling/css/styles.css";
import "./styling/css/test.css";
import "./styling/css/book.css";
import "./styling/css/popup.css";
import "./styling/css/interview.css";


import App from "./App.js";
import ErrorPage from "./error/Error";
import Homescreen from "./pages/Homescreen.jsx";
import Inventory from "./components/clues/Book.jsx";
import Test2 from "./components/Test2.jsx";
import SceneVincentInterview from "./components/poi/VincentInterview.jsx";
import { PhoneScreen } from "./pages/PhoneScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examine",
    element: <Test2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vincent",
    element: <SceneVincentInterview />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/phone",
    element: <PhoneScreen/>,
    errorElement: <ErrorPage />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
