import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useRouteStorage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location;

    // Запам'ятовуємо останню відкриту статтю Media
    if (pathname.startsWith("/media/")) {
      sessionStorage.setItem("media-route", pathname);
    }

    // При поверненні на /media відновлюємо останню статтю
    if (pathname === "/media") {
      const savedRoute = sessionStorage.getItem("media-route");

      if (savedRoute) {
        navigate(savedRoute, { replace: true });
      }
    }
  }, [location.pathname, navigate]);
}
