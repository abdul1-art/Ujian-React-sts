import { Routes, Route } from "react-router";
import MainLayout from "./Layouts/MainLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Testimony from "./Pages/Testimony";
import FAQ from "./Pages/Faq";
import HomeDetail from "./Pages/HomeDetail";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/home/:id" element={<HomeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
