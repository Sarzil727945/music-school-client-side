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
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pagesDeshboard/MyClasses/MyClasses";
import ManageUsers from "../pagesDeshboard/AllUsers/ManageUsers";
import AddClass from "../pagesDeshboard/AddClass/AddClass";
import ManageClasses from "../pagesDeshboard/ManageClasses/ManageClasses";
import Classes from "../pages/Classes/Classes";
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
                    path: "/classes",
                    element: <Classes></Classes>
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
                    path:"myClasses",
                    element: <MyClasses></MyClasses>
               },
               {
                    path:"manageClasses",
                    element: <ManageClasses></ManageClasses>
               },
               {
                    path:"manageUsers",
                    element: <ManageUsers></ManageUsers>
               },
               
              
          ]
     }
]);