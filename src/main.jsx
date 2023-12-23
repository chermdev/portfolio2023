import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/error-page'
import Resume from './routes/resume/index'
import Root from './routes/root/index'
import App from './App';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Root />
            },
            {
                path: "/resume",
                element: <Resume />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
);
