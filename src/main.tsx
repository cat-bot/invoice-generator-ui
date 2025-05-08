import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// main CSS
import './index.css'

// page components for routing
import Home from './pages/Home.tsx'
import Signin from './pages/Signin.tsx'
import Register from './pages/Register.tsx'
import MainLayout from './layouts/MainLayout.tsx';

// create a browser router
const router = createBrowserRouter([
  {
    // all routes inherit the main layout
    Component: MainLayout,
    children: [

      // default route @ '/'
      { index: true, Component: Home },

      // nested routes @ '/auth'
      { 
        path: "auth", 
        children: [
          { path: "signin", Component: Signin },
          { path: "register", Component: Register }
        ]
      }
    ]
  }
]);

// render the app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
