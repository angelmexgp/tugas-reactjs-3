import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Book from './pages/Book.jsx'

import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)