import { ScrollTrigger, SplitText } from "gsap/all"
import { gsap } from "gsap"
import Navbar from "./components/Navbar"
import { navLinks } from "../constants"
import { useGSAP } from "@gsap/react"
import Hero from "./components/Hero"
import { Agentation } from "agentation"
import Cocktails from "./components/Cocktails"
import About from "./components/About"

gsap.registerPlugin(SplitText, ScrollTrigger);


const App = () =>{
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About/>
        {import.meta.env.DEV && <Agentation />}
    </main>
  )
}

export default App