import ReactDOM from 'react-dom/client';
import './styles/index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import {
  SignIn,
  pages
} from "./pages";

import { Page } from './types';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  ...(pages.map((page: Page) => (
    {
      path: page.href,
      element: page.component
    }
  )))
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider
    router={router}
  />
);
