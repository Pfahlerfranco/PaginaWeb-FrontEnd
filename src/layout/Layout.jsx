import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../styles/Layout.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}