import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Samples from "./pages/Samples/Samples";
import WebLocalize from "./pages/WebLocalize/WebLocalize";
import Localization from "./pages/Localization/Localization";
import Documents from "./pages/Documents/Documents";
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
          path="/samples" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <Samples 
                lang={lang} 
              />
            </PageLayout>
          } 
        />

        <Route 
          path="/samples/website" 
          element={
            <PageLayout lang={lang} setLang={setLang}>
              <WebLocalize 
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