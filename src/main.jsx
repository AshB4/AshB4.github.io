import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Blog from './pages/Blog.jsx'
import Links from './pages/Links.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/*" element={<Navigate to="/blog" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/*" element={<Navigate to="/projects/" replace />} />
        <Route path="/feed.xml" element={<Navigate to="/blog" replace />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
