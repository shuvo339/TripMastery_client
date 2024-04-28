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
import CountrySpots from './../pages/CountrySpots/CountrySpots';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('https://trip-mastery-server.vercel.app/tourspots')
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
          loader: ({params})=>fetch(`https://trip-mastery-server.vercel.app/tourspots/${params.id}`)
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://trip-mastery-server.vercel.app/tourspots/${params.id}`)
        },
        {
          path: "/countryspots/:country_name",
          element: <CountrySpots></CountrySpots>,
          loader: ({params})=>fetch(`https://trip-mastery-server.vercel.app/tourspots/country_name/${params.country_name}`)
        },
        {
          path: "/mylist",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        },
        {
          path: "/allspots",
          element: <AllSpots></AllSpots>,
          loader: ()=>fetch('https://trip-mastery-server.vercel.app/tourspots')
        },
      ],
    },
  ]);