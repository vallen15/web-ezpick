import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Rekomendasi from "./pages/Rekomendasi";
import Promo from "./pages/Promo";
import Paket from "./pages/Paket";
import Makanan from "./pages/Makanan";
import Minuman from "./pages/Minuman";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/rekomendasi" element={<Rekomendasi />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Paket" element={<Paket />} />
        <Route path="/Makanan" element={<Makanan />} />
        <Route path="/Minuman" element={<Minuman />} />
      </Routes>
    </Router>
  );
};

export default App;
