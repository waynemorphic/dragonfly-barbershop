import Index from "./Index";
import { useState } from "react";
import NavBar from "@pages/navbar/NavBar";
import Footer from "@pages/footer/Footer";
import Services from "@pages/services/Services";

export default function Home() {
  // handle watch video
  const [clicked, isClicked] = useState(false);

  const handleWatchVideo = () => isClicked((prevValue) => !prevValue);

  const responsiveVideoDiv = document.querySelector(".responsive-video");
  const watchBtn = document.querySelector("#watchBtn");
  document.addEventListener("click", (e) => {
    if (clicked && e.target !== watchBtn) {
      if (e.target !== responsiveVideoDiv) {
        isClicked(false);
      }
    }
  });

  return (
    <div>
      <NavBar />
      <Index handleWatchVideo={handleWatchVideo} clicked={clicked} />
      <Services />
      <Footer />
    </div>
  );
}
