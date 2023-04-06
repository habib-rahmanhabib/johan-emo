import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './componet/home/Home'
import Shop from './componet/shop/Shop'
import Review from './componet/order Review/Review'
import Login from './componet/Login/Login'
import ManageInvartory from './componet/manageInvantory/ManageInvartory'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './componet/Order/Order'
import cartProductLoder from './Loder/ProductLoderCart'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "order",
        element: <Order></Order>, 
        loader: cartProductLoder
      },
      {
        path: 'review',
        element: <Review></Review>
      },
      {
        path: 'inventory',
        element: <ManageInvartory></ManageInvartory>
      },
      {
        path: 'login',
        element: <Login></Login>,

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
