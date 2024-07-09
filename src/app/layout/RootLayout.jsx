import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NavbarMobile from "../Components/NavbarMobile";
import CartMessage from "../Components/CartMessage";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <main className="relative bg-gray-1 flex flex-col">
      <Navbar />
      <NavbarMobile />
      <ToastContainer autoClose={5000} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
