import "./App.css";
import Landing from "./pages/Landing";
import Diensten from "./pages/Diensten";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<OverOns />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
