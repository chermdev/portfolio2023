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
import App from './pages/App';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/resume",
                element: <Resume />
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
