import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactLenis } from "lenis/dist/lenis-react"
import Navbar from "./Components/Navbar"
import Home from "./Page/Home"
import About from "./Page/About"
import Contact from "./Page/Contact"
import NoPage from "./Page/NoPage"
import Projects from "./Page/Projects"
import Footer from "./Components/Footer"
import AfricaTradeAccess from "./Projects/AfricaTradeAccess"
import Charger from "./Projects/Charger"
import Chatsy from "./Projects/Chatsy"
import Fitness from "./Projects/Fitness"
import FokesConsult from "./Projects/FokesConsult"
import FokesProperty from "./Projects/FokesProperty"
import ImageSearch from "./Projects/ImageSearch"
import ToDo from "./Projects/ToDo"
import WeatherApp from "./Projects/WeatherApp"


const App = () => {
  return (
    <div className="bg-[#F5F6F1]">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 1,
            infinite: false,
            syncTouch: true,
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
            <Route path="/africa-trade-access" element={<AfricaTradeAccess/>}/>
            <Route path="/charger" element={<Charger/>}/>
            <Route path="/chatsy" element={<Chatsy/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/fokes-consult" element={<FokesConsult/>}/>
            <Route path="/fokes-property" element={<FokesProperty/>}/>
            <Route path="/image-search" element={<ImageSearch/>}/>
            <Route path="/todo" element={<ToDo/>}/>
            <Route path="/weather-app" element={<WeatherApp/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ReactLenis>
    </div>
  )
}

export default App