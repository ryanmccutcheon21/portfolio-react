import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './pages/Skills'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
