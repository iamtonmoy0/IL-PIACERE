import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './context/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
    </QueryClientProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
