import Footer from "../shared/Footer";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="bg-home dark:bg-darkMode min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
