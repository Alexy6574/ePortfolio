import { Routes, Route } from "react-router-dom";
import './App.css'
import API from './Pages/API'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

export default function App() {
  return(
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/API" element={<API />} /> 
    </Routes>
  </Router>

  )
}

