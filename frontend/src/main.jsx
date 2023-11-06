import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Body from './components/Body.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
