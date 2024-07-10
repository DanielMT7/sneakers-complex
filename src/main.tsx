import React from 'react'
import ReactDOM from 'react-dom/client'

// Components/Routes
import App from './App.tsx'
import Home from './Pages/Home/Home.tsx'
import Shoe from './Pages/ShoePage/Shoe.tsx'
import Offers from './Pages/OffersPage/Offers.tsx'

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
        path: '/offer',
        element: <Offers />
      },
      {
        path: '/offer/gender/:gender',
        element: <Offers />
      },
      {
        path: '/offer/brand/:brand',
        element: <Offers />
      },
      {
        path: '/offer/category/:category',
        element: <Offers />
      },
      {
        path: '/offer/gender/:gender/brand/:brand',
        element: <Offers />
      },
      {
        path: '/offer/brand/:brand/category/:category',
        element: <Offers />
      },
      {
        path: '/offer/gender/:gender/brand/:brand/category/:category',
        element: <Offers />
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
