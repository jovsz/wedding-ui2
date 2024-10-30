import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import Routes and Route
import './index.css'
import App from './App.jsx'
import Confirmation from './Confirmation' // Import the Confirmation component
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById('root')).render(
    <NextUIProvider>
      <Router> {/* Wrap App with Router */}
        <Routes> {/* Define your routes here */}
          <Route path="/" element={<App />} /> {/* Main App Route */}
          <Route path="/confirmation" element={<Confirmation />} /> {/* Route for Confirmation */}
        </Routes>
      </Router>
    </NextUIProvider>
)