import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import "./styling/css/Home.css";
import "./styling/css/global.css";
import "./styling/css/styles.css";

import App from "./App.js";
import ErrorPage from "./error/Error";
import HomescreenTest from "./pages/HomescreenTest.jsx";
import Scenetest from "./pages/ObjectTest.jsx";
import POIScreen from "./pages/POIScreen.jsx";
import SuspectInterview from "./pages/Interview.jsx";
import AnotherComponent from "./pages/ClueSystem.jsx";
import BookComponent from "./pages/Book.jsx";

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
    element: <AnotherComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/poi",
    element: <POIScreen />,
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
