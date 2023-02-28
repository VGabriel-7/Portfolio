import './assets/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={ <Projects />} />
        <Route path="/contact-me" element={ <ContactMe />} />
        <Route path="/about" element={ <About />} />
        <Route path="/" element={ <Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
