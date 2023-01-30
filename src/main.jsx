import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import './index.css'

// Páginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Edit from './routes/Edit'
import EditReal from './routes/EditReal'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
      path: "/new",
      element: <NewPost />
      },
      {
      path: "/edit",
      element: <Edit />
      },
      {
        path:"/editreal/:id",
        element: <EditReal />
        }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
