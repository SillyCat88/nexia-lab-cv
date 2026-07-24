import { Outlet } from "react-router-dom";
import SectionNav from "../components/SectionNav/SectionNav";

export default function MainLayout() {
  return (
    <>
      <SectionNav />
      <Outlet />
    </>
  );
}
