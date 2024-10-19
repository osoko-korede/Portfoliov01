import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactLenis } from "lenis/dist/lenis-react"
import Navbar from "./Components/Navbar"
import Home from "./Page/Home"
import About from "./Page/About"
import Contact from "./Page/Contact"
import NoPage from "./Page/NoPage"
import Projects from "./Page/Projects"
import Footer from "./Components/Footer"
import ProjectOne from "./Projects/ProjectOne"


const App = () => {
  return (
    <div className=" bg-white">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          // lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projectone" element={<ProjectOne/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ReactLenis>
    </div>
  )
}

export default App