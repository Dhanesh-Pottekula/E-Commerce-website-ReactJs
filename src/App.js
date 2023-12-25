
import './App.css';

import CartPage from './pages/CartPage';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage';
import SignUpPage from './pages/SignUpPage';


import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import CheckOutPage from './pages/CheckOutPage';



const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },{
    path: "/signup",
    element: <SignUpPage/>,
  },{
    path: "/cart",
    element: <CartPage/>,
  },{
    path: "/checkout",
    element: <CheckOutPage/>,
  },
  {
    path: "/productDetails",
    element: <ProductsDetailsPage/>,
  },
]);


  
  
  function App() {
    return (
      <div className="App">
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
