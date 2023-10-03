import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../layout/pages/Home/Home";
import Login from "../layout/pages/Login/Login";
import Register from "../layout/pages/Register/Register";
import Orders from "../Componets/Orders/Orders";
import PrivateRoute from "./Private/PrivateRoute";
import Dashborad from "../layout/pages/Dashboard/Dashborad";
import Profile from "../layout/pages/Profile/Profile";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashborad></Dashborad>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Route;
