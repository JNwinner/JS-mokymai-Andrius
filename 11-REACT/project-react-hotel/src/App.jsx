import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import BookingsPage from './pages/BookingsPage'
import ContactsPage from './pages/ContactsPage'
import WhatToDoPage from './pages/WhatToDoPage'
import MainLayout from './layout/MainLayout'
import NotFoundPage from './pages/NotFoundPage'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/what-to-do" element={<WhatToDoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
