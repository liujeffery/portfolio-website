import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/portfolio-website" element = {<Home />}/>
        <Route path = "/projects" element = {<Projects />}/>
        <Route path = "/project/:id" element = {<ProjectDisplay />}/>
        <Route path = "/experiences" element = {<Experiences />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
