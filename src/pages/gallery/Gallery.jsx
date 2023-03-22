import barbercut from "../../assets/barbercut.png";
import "./Gallery.css";
import NavBar from "../navbar/NavBar";

export default function Gallery() {
  return (
    <section>
      <NavBar />
      <div className="card-container">      
      <div className="image-card">
        <img className="image-1" src={barbercut} />
        <img className="image-2" src={barbercut} />
        <img className="image-3" src={barbercut} />
        <img className="image-4" src={barbercut} />
        <img className="image-5" src={barbercut} />
        <img className="image-6" src={barbercut} />
        <img className="image-7" src={barbercut} />
        <img className="image-8" src={barbercut} />
      </div>
    </div>
    </section>
    
  );
}
