import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Home />
      
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
