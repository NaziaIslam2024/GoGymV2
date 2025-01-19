import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
