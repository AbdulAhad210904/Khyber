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
    <div>
    <div className="App " style={{marginTop:'2rem'}}>
      <Navbar></Navbar>
      <Header></Header>
      <Home />

      <div className="app">
      <div className="container">
        <h1 className="header_timer">
        Get 15% Off <br></br>
THE JUICIEST TENDERS IN THE TOWN
        </h1>
        <Timer />
      </div>
    </div>
      

      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
