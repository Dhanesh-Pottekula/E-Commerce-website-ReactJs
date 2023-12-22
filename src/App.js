
import './App.css';

import CartPage from './pages/CartPage';
import Checkout from './pages/CheckOut';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



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
    element: <Checkout/>,
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
