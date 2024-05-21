import {createBrowserRouter} from "react-router-dom";
//import Pages
import Home from "../pages/Home.page";
import Dashboard from "../pages/Dashboard.page";
import { FinancialRecordsProvider } from "../contexts/financial-record-context";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/dashboard",
      element: 
      <FinancialRecordsProvider>
        <Dashboard/>
      </FinancialRecordsProvider>
      ,
    },
  ]);


export default Router