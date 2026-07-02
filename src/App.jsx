import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/dashboard/Dashboard";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import SectionNav from "./components/SectionNav";

export default function App() {
  return (
    <>
      <SectionNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}