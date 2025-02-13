import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Login from "../components/Login.jsx";

import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Cart from "../components/Cart.jsx";
import Details from "../components/Details.jsx";
import Payment from "../components/Payment.jsx";

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path:"/details/:id",
      element:<Details/>
    },{
      path:"/payment",
      element:<Payment/>
    }
  ],
}]);

export default router;
