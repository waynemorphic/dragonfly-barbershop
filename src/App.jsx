import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CircleLoader } from "react-spinners";

// Route based Code splitting
const Home = lazy(() => import("@pages/home/Home"));
const Gallery = lazy(() => import("@pages/gallery/Gallery"));
const Booking = lazy(() => import("@pages/booking/Booking"));
const Layout = lazy(() => import("@components/layout/Layout"));
const Login = lazy(() => import("@admin/dashboard/auth/Login"));
const Registration = lazy(() => import("@admin/dashboard/auth/Registration"));

// Spinner css properties
const override = {
  display: "block",
  margin: "0 auto",
  border: "#0FA98D"
}

function App() {
  return (
    <div className="App">
        <Suspense fallback={<CircleLoader cssOverride={override}/>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/register" element={<Registration />} />
            </Route>
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
