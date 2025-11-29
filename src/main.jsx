import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import "aos/dist/aos.css";
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
        <App />
    </BrowserRouter>
  </StrictMode>,
)
