import "./App.css";
import Landing from "./pages/Landing";
import Diensten from "./pages/Diensten";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<OverOns />} />
      </Routes>
    </div>
  );
}

export default App;
