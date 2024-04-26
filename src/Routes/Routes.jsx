import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddTouristSpot from './../pages/AddTouristSpot/AddTouristSpot';
import UpdateSpot from './../pages/UpdateSpot/UpdateSpot';
import MyList from './../pages/MyLIst/MyList';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
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
          element: <AddTouristSpot></AddTouristSpot>,
        },
        {
          path: "/update",
          element: <UpdateSpot></UpdateSpot>,
        },
        {
          path: "/mylist",
          element: <MyList></MyList>,
        },
      ],
    },
  ]);