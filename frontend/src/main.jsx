import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

import { AuthProvider } from "./auth/AuthProvider";
import Home from './components/Home';
import Favourites from './components/Favourites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
