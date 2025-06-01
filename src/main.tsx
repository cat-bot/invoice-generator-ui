import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router";

// main CSS
import './index.css'

// page components for routing
import Home from './pages/Home.tsx'
import Signin from './pages/Signin.tsx'
import Signout from './pages/Signout.tsx'
import MainLayout from './layouts/MainLayout.tsx';
import ErrorComponent from './components/Error.tsx';

// MSAL imports
import {
    PublicClientApplication,
    EventType,
    EventMessage,
    AuthenticationResult,
} from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

// create a browser router
const router = createBrowserRouter([
  {
    // all routes inherit the main layout
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorComponent />,
    children: [

      // default route @ '/'
      { index: true, Component: Home},

      // nested routes @ '/auth'
      { 
        path: "auth", 
        children: [
          { path: "signin", Component: Signin },
          { path: "signout", Component: Signout }
        ]
      }
    ]
  }
]);

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
          const payload = event.payload as AuthenticationResult;
          const account = payload.account;
          msalInstance.setActiveAccount(account);
      }
  });

  // render the app
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <RouterProvider router={router} />
      </MsalProvider>
    </StrictMode>,
  )

});

