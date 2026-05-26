import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Conversation from "./components/Conversation"
import Templates from "./components/Templates"
import Footer from "./components/Footer"
import Marquee from "./components/Marquee"

export default function App() {
  return (
    <div className="max-w-[1400px] mx-auto px-4">

      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Conversation />
      <Templates />
      <Footer />

    </div>
  )
}