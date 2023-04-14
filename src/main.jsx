import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css';
import Docs1 from './pages/docs1';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Policy from './pages/Policy';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/docs1",
    element: <Docs1 />,
  },
  {
    path: "/policy",
    element: <Policy />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
   

  </React.StrictMode>,
)
