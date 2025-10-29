import Navbar from "./components/Navbar";
import { BlurBlow } from "./components/Navbar";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div className="bg-[#3C467B]  ">
        <BlurBlow
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        ></BlurBlow>

        <div
          className="absolute inset-0 
  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
  bg-[size:14px_24px] 
  mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)]"
        ></div>

        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
