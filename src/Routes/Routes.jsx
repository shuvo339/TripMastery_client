import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddTouristSpot from './../pages/AddTouristSpot/AddTouristSpot';
import UpdateSpot from './../pages/UpdateSpot/UpdateSpot';
import MyList from './../pages/MyLIst/MyList';
import AllSpots from './../pages/AllSpots/AllSpots';
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from './PrivateRoute';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('http://localhost:5000/tourspots')
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/addspot",
          element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>,
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/tourspots/${params.id}`)
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/tourspots/${params.id}`)
        },
        {
          path: "/mylist",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/tourspots')
        },
        {
          path: "/allspots",
          element: <AllSpots></AllSpots>,
          loader: ()=>fetch('http://localhost:5000/tourspots')
        },
      ],
    },
  ]);