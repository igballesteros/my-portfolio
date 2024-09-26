import CenterSpace from "./components/CenterSpace/CenterSpace";
import MyCanvas from "./components/MyCanvas/MyCanvas";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./Footer/Footer";
import "./style.css"

function App() {
  return (
    <>
    <div className="theme">
      <MyCanvas/>
      <CenterSpace/>
      <NavBar />
      <About />
      <Projects/>
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App
