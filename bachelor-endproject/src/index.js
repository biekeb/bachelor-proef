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
import BookComponent from "./pages/Book.jsx";
import Test2 from "./components/Test2.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Test2 />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/screen",
    element: <AnotherComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/poi",
    element: <SuspectScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/book",
    element: <BookComponent />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
