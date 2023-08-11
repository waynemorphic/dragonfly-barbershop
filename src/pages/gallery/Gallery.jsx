
import React, { useEffect } from 'react';
import barbercut from "@assets/barbercut.png";
import shop from "@assets/shop.jpg";
import "./Gallery.css";
import NavBar from "@pages/navbar/NavBar";

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery - DRAGONFLY BARBERSHOP';
  }, []);

  return (
    <section>
      <NavBar />
      <div className="card-container">
      <div className="image-card">
        <img className="image-1" src={barbercut} />
        <img className="image-2" src={shop} />
        <img className="image-3" src={barbercut} />
        <img className="image-4" src={shop} />
        <img className="image-5" src={barbercut} />
        <img className="image-6" src={shop} />
        <img className="image-7" src={barbercut} />
        <img className="image-8" src={shop} />
      </div>
    </div>
    </section>

  );
}
