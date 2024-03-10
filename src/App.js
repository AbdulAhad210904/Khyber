import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
function App() {
  const targetDate = new Date('2024-03-11T15:00:00');
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Home />
      <Timer targetDate={targetDate}></Timer>
      
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
