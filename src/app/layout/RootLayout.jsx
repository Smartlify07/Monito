import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <main className="bg-gray-1">
      <Navbar />

      <Outlet />
    </main>
  );
};

export default RootLayout;
