import { ScrollTrigger, SplitText } from "gsap/all"
import { gsap } from "gsap"
import Navbar from "./components/Navbar"
import { navLinks } from "../constants"
import { useGSAP } from "@gsap/react"
import Hero from "./components/Hero"
import { Agentation } from "agentation"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

gsap.registerPlugin(SplitText, ScrollTrigger);


const App = () =>{
  return (
    <main>
        <div className="noisy"></div>
        <Navbar />
        <Hero />
        <Cocktails />
        <About/>
        <Art/>
        <Menu />
        <Contact />
        {import.meta.env.DEV && <Agentation />}
    </main>
  )
}

export default App