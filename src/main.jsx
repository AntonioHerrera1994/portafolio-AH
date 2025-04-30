import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProjectGallery from './components/Portafolio.jsx'
import ProjectPersonal from './components/Proyectos.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projectgallery" element={<ProjectGallery />} />
        <Route path="/projectpersonal" element={<ProjectPersonal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
