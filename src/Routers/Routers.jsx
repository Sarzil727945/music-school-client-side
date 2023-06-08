import {
     createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import Main from "../Laout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllClass from "../pagesDeshboard/AllClass/AllClass";
import Dashboard from "../Laout/Dashboard";
import AllUsers from "../pagesDeshboard/AllUsers/AllUsers";
import AddClass from "../pagesDeshboard/AddClass/addClass";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>
               },
               {
                    path: 'register',
                    element: <Register></Register>
               },
               {
                    path: 'login',
                    element: <Login></Login>
               },
          ]
     },
     {
          path: "dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
               {
                    path:"allClass",
                    element:<AllClass></AllClass>
               },
               {
                    path:"addClass",
                    element: <AddClass></AddClass>
               },
               {
                    path:"allUsers",
                    element: <AllUsers></AllUsers>
               },
              
          ]
     }
]);