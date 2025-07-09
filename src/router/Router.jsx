import {
  createBrowserRouter
} from "react-router-dom";

import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import ProductDetails from "../Pages/Products/ProductDetails";
import Products from "../Pages/Products/Products";
import AllProducts from "../Pages/Products/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path: '/products/:id',
        element:<ProductDetails></ProductDetails>
      },
     
    ]
  }
]);