import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignIn from './SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
