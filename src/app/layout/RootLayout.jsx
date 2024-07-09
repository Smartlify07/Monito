import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NavbarMobile from "../Components/NavbarMobile";

const RootLayout = () => {
  return (
    <main className="bg-gray-1 flex flex-col">
      <Navbar />
      <NavbarMobile />

      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
