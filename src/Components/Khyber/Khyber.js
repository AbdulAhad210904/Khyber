import "./Khyber.css";
import Heading from "./Heading";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Timer from "./Timer";
function Khyber() {
  return (
    <div>
    <div className="App_khyber" style={{marginTop:'2rem'}}>
      <Navbar></Navbar>
      <Header></Header>
      <Heading />

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

export default Khyber;
