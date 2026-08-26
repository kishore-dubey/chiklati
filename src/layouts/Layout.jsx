import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Layout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
       <ScrollToTop />
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;