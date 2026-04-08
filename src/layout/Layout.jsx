import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <div className="layout">

      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}