import React from "react";
import Routlayout from "./Components/Routlayout/Routlayout";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Routlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "Contact", element: <Contact /> },

      { path: "*", element: <Notfound /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
