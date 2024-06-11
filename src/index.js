import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: '/Contact',
        element: <Contact />
      },
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 
reportWebVitals();
