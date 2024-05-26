import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styling/css/Home.css";
import "./styling/css/global.css";
import "./styling/css/styles.css";
import "./styling/css/test.css";
import "./styling/css/book.css";

import App from "./App.js";
import ErrorPage from "./error/Error";
import Homescreen from "./pages/Homescreen.jsx";
import SuspectScreen from "./pages/SuspectScreen.jsx";
import AnotherComponent from "./components/clues/ClueSystem.jsx";
import Examine from "./pages/Examine.jsx";
import OperationDon from "./pages/OperationDon.jsx";
import Inventory from "./components/clues/Book.jsx";
import { Test } from "./components/Tets.jsx";
import Test2 from "./components/Test2.jsx";

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
    path: "/suspects",
    element: <SuspectScreen />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
