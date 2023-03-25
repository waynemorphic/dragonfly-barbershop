import "../home/Home.css";
import ImagesCarousel from "../../components/bootstrap/ImagesCarousel";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Index = () => {
  return (
    <div className="home">
      <div className="home-page">
        <h3>
          The Best Barber Shop{" "}
          <span>
            for you
          </span>
        </h3>
        <p className="objective">
          Haircut Services For Men and Women. We will pamper your Hair, Scalp,
          Face and Body with the Best Services within Luxurious Facilities.
        </p>
        <div className="buttons">
          <Link to="/booking">
            <button className="booking-button" type="submit">
              Book Now
            </button>
          </Link>
          <button className="booking-button" type="submit">
            Watch Video
          </button>
        </div>

        <div className="details">
          <h4>
            <span>+20 </span> <br /> Years of Experience
          </h4>
          <h4 className="lines">
            <span>+80</span> <br /> Beauty Experts
          </h4>
          <h4 className="lines">
            <span>+20K</span> <br /> Happy Customers
          </h4>
        </div>
      </div>
      <ImagesCarousel />
    </div>
  );
};

export default function Home() {
  // handle booking click
  
  return (
    <div>
      <NavBar />
      <Index />
      <Footer />
    </div>
  );
}
