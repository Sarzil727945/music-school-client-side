import {
     createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import Main from "../Laout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../Laout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pagesDeshboard/MyClasses/MyClasses";
import ManageUsers from "../pagesDeshboard/AllUsers/ManageUsers";
import AddClass from "../pagesDeshboard/AddClass/AddClass";
import ManageClasses from "../pagesDeshboard/ManageClasses/ManageClasses";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pagesDeshboard/Instructors/Instructors";
import AdminRoute from "./AdminRoute";
import InstructorsRoute from "./InstructorsRoute";
import EnrolledClass from "../pagesDeshboard/EnrolledClass/EnrolledClass";
import Selected from "../pagesDeshboard/Selected/Selected";
import Payment from "../pagesDeshboard/Payment/Payment";
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
                    path:"instructors",
                    element:<Instructors></Instructors>
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
                    path:"selected",
                    element:<PrivateRoute><Selected></Selected></PrivateRoute>,
               },
               {
                    path:"payment",
                    element:<PrivateRoute><Payment></Payment></PrivateRoute>,
               },
               {
                    path:"enrolledClass",
                    element:<PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>
               },
               {
                    path:"addClass",
                    element: <InstructorsRoute><AddClass></AddClass></InstructorsRoute>
               },
               {
                    path:"myClasses",
                    element: <InstructorsRoute><MyClasses></MyClasses></InstructorsRoute>
               },
               {
                    path:"manageClasses",
                    element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
               },
               {
                    path:"manageUsers",
                    element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
               },
          ]
     }
]);