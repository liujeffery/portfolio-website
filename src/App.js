import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/portfolio-website" element = {<Home />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
