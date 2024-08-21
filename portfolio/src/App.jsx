import CenterSpace from "./components/CenterSpace/CenterSpace";
import MyCanvas from "./components/MyCanvas/MyCanvas";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <MyCanvas/>
      <CenterSpace/>
      <NavBar />
      <About />
      <Contact />
      <Projects/>
    </>
  )
}

export default App
