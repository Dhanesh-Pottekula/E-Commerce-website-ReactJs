import "./App.css";

import CartPage from "./pages/CartPage";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import SignUpPage from "./pages/SignUpPage";

import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOutPage from "./pages/CheckOutPage";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  {
    path: "/productDetails",
    element: <ProductsDetailsPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
