import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './src/components/App';
import Error from './src/components/Error';
import Body from './src/components/Body';
import RestoMenu from './src/components/RestoMenu';
import Shimmer from './src/components/Shimmer';

// import About from './src/components/About';
// import Contact from './src/components/Contact';
const About = lazy(() => import('./src/components/About'));
const Contact = lazy(() => import('./src/components/Contact'));

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
            element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
        },
        {
            path: "/contact",
            element: <Suspense fallback={<Shimmer />}><Contact /></Suspense>,
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


