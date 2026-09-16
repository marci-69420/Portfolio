import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import ProjectsPage from './pages/projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
