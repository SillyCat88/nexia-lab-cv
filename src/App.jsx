import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/dashboard/Dashboard";
import Media from "./pages/Media/Media";
import ArticleViewer from "./pages/Media/ArticleViewer";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./layouts/MainLayout";
import PageLayout from "./components/PageLayout/PageLayout";
import useLang from "./hooks/useLang";


export default function App() {
  const [lang, setLang] = useLang();

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

      <Route element={<MainLayout lang={lang} />}>
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