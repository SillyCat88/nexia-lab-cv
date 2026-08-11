import { Outlet } from "react-router-dom";
import SectionNav from "../components/SectionNav/SectionNav";

export default function MainLayout({ lang }) {
  return (
    <>
      <SectionNav lang={lang} />
      <Outlet />
    </>
  );
}
