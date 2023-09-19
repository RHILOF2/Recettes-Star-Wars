import * as React from "react";
import * as ReactDOM from "react-dom/client"
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navigation from "./Components/Navigation";
import Liste from "./Components/Liste";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Liste />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Liste />
  </React.StrictMode>
);