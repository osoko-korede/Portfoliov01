import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { ReactLenis } from "lenis/dist/lenis-react"
import Navbar from "./Components/Navbar"
import Home from "./Page/Home"
import About from "./Page/About"
import Contact from "./Page/Contact"
import NoPage from "./Page/NoPage"
import Projects from "./Page/Projects"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop";
import projectData from "./constants/projectData"
import ProjectDetail from "./Components/ProjectDetail"



const App = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
            infinite: false,
            syncTouch: true,
        }}
      >
        <BrowserRouter>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/project/:projectId" element={<ProjectDetailWrapper />} />
            <Route path="*" element={<NoPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ReactLenis>
    </div>
  )
}

const ProjectDetailWrapper = () => {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);
  return project ? <ProjectDetail {...project} /> : <div className="flex  justify-center w-full h-full m-auto items-center my-40"><p className=" text-8xl green">Project not found</p></div>;
};

export default App