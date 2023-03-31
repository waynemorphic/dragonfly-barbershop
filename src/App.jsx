import "./App.css";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Booking from "./pages/booking/Booking";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
// import UserDetails from "./pages/booking/checkout/user/UserDetails"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          {/* <Route path="/checkout" element={<UserDetails />}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
