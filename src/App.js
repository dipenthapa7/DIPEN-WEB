import "@/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-void">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
