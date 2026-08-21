import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Localization from "./pages/Localization/Localization";
import Documents from "./pages/Documents/Documents";
import Media from "./pages/Media/Media";
import ArticleViewer from "./pages/Media/ArticleViewer";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./layouts/MainLayout";
import PageLayout from "./components/PageLayout/PageLayout";
import useLang from "./hooks/useLang";
import useRouteStorage from "./hooks/useRouteStorage";


export default function App() {
  const [lang, setLang] = useLang();

  useRouteStorage();

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
          path="/localization" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Localization 
                lang={lang} 
              />
            </PageLayout>
          } 
        />
        <Route 
          path="/documents" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Documents 
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