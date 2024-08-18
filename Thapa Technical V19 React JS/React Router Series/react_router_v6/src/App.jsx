import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import UI from "./Components/AppLayout/UI";
import "./App.css";

const App = () => {
  // -------------------------

  // There was another way of using react router in react application , but this was an old method and called as Helper Function in react router.

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />}></Route>
  //       <Route path="/about" element={<About />}></Route>
  //       <Route path="/services" element={<Services />}></Route>
  //       <Route path="/contact" element={<Contact />}></Route>
  //       <Route path="/portfolio" element={<Portfolio />}></Route>
  //     </>
  //   )
  // );

  // -------------------------

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UI />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
