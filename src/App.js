import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

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
