import { Outlet } from "react-router-dom";
import SectionNav from "../components/SectionNav";

export default function MainLayout() {
  return (
    <>
      <SectionNav />
      <Outlet />
    </>
  );
}
