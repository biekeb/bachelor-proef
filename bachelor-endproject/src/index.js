import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styling/css/Home.css";
import "./styling/css/global.css";
import "./styling/css/styles.css";
import "./styling/css/test.css";

import App from "./App.js";
import ErrorPage from "./error/Error";
import Homescreen from "./pages/Homescreen.jsx";
import SuspectScreen from "./pages/SuspectScreen.jsx";
import AnotherComponent from "./components/clues/ClueSystem.jsx";
import BookComponent from "./components/del/Book.jsx";
import Test2 from "./components/Test2.jsx";
import Examine from "./pages/Examine.jsx";
import OperationDon from "./pages/OperationDon.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/screen",
    element: <Test2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/suspects",
    element: <SuspectScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/book",
    element: <BookComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examine",
    element: <Examine />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/operation",
    element: <OperationDon />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
