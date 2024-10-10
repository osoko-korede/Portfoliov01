import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NoPage from "./Pages/NoPage"
import Projects from "./Pages/Projects"
import Footer from "./Components/Footer"
import ProjectOne from "./Projects/ProjectOne"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projectone" element={<ProjectOne/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App