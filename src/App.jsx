import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Projects from './components/Pages/Projects'
import About from './components/Pages/About'
import './App.css'
// lourity
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
