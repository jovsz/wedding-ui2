import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import Routes and Route
import './index.css'

import Confirmation from './Confirmation' // Import the Confirmation component
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <QueryClientProvider client={queryClient}>

      <Router> {/* Wrap App with Router */}
        <Routes> {/* Define your routes here */}
          {/* <Route path="/" element={<App />} /> Main App Route */}
          <Route path="/" element={<Confirmation />} /> {/* Route for Confirmation */}
        </Routes>
      </Router>
      </QueryClientProvider>,

    </NextUIProvider>
)