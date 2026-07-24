import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/dashboard/Dashboard";
import Media from "./pages/Media/Media";
import ArticleViewer from "./pages/Media/ArticleViewer";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";


export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Welcome lang={lang} setLang={setLang} />}
      />

      <Route element={<MainLayout />}>
        <Route 
          path="/home" 
          element={<Home lang={lang} setLang={setLang} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard lang={lang} setLang={setLang} />} 
        />
        <Route 
          path="/media" 
          element={<Media lang={lang} setLang={setLang} />} 
        />
        <Route 
          path="media/:articleId" 
          element={<ArticleViewer lang={lang} setLang={setLang} />} 
        />
        <Route 
          path="/contact" 
          element={<Contact lang={lang} setLang={setLang} />} 
        />
      </Route>
    </Routes>
  );
}