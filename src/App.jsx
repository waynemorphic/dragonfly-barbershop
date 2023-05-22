import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Router } from "react-router-dom";
import { lazy, Suspense } from "react";

// Route based Code splitting
const Home = lazy(() => import("./pages/home/Home"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Booking = lazy(() => import("./pages/booking/Booking"));
const Layout = lazy(() => import("./components/layout/Layout"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
            </Route>
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
