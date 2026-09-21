import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import ProjectsPage from './pages/projects'

function App() {
  return (
    <>
      <div className="ambient-background" aria-hidden="true" />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a className="skip-link" href="#main">
            Skip to main content
          </a>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
