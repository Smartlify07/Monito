import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NavbarMobile from "../Components/NavbarMobile";
import CartMessage from "../Components/CartMessage";
import { toast, ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <main className="relative bg-gray-1 flex flex-col">
      <Navbar />
      <NavbarMobile />

      <ToastContainer
        position="top-right"
        autoClose={5000} // Auto close after 5000ms (5 seconds)
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
