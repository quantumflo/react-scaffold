import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './src/components/App';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Body from './src/components/Body';
import RestoMenu from './src/components/RestoMenu';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurant/:resId",
            element: <RestoMenu />,
        }
      ]
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


