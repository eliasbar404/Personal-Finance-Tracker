import {createBrowserRouter} from "react-router-dom";
//import Pages
import Home from "../pages/Home.page";
import Dashboard from "../pages/Dashboard.page";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
  ]);


export default Router