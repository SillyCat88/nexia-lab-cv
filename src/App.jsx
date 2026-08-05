import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/dashboard/Dashboard";
import Media from "./pages/Media/Media";
import ArticleViewer from "./pages/Media/ArticleViewer";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./layouts/MainLayout";
import PageLayout from "./components/PageLayout/PageLayout";


export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Welcome 
            lang={lang}
            setLang={setLang}
          />
        }
      />

      <Route element={<MainLayout />}>
        <Route 
          path="/home" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Home 
                lang={lang} 
              />
            </PageLayout>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Dashboard 
                lang={lang} 
              />
            </PageLayout>
          } 
        />
        <Route 
          path="/media" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Media 
                lang={lang} 
              />
            </PageLayout>
          } 
        />
        <Route 
          path="media/:articleId" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <ArticleViewer 
                lang={lang} 
              />
            </PageLayout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Contact 
                lang={lang} 
              />
            </PageLayout>
          } 
        />
      </Route>
    </Routes>
  );
}