import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Main from "./layout/Main";
import Contact2 from "./components/Contact2/Contact2";
import Contact3 from "./components/Contact3/Contact3";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main />, 
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/contact2", element: <Contact2 /> },
        { path: "/contact3", element: <Contact3 /> }
      ],
    },
  ]);
  return (
    <div className="bg">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
