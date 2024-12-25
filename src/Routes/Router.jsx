import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout.jsx/Root";
import DoctorProfile from "../Pages/DoctorProfile";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/doctor-profile',
        element: <DoctorProfile/>
      }
    ]
    },
  ]);


export default router;