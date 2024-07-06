import React from 'react'
import ReactDOM from 'react-dom/client'

// Components/Routes
import App from './App.tsx'
import Home from './Pages/Home/Home.tsx'
import Shoe from './Pages/ShoePage/Shoe.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import './custom.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shoe/:id',
        element: <Shoe />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
