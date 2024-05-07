import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar onSearch={() => {}} />
      <Outlet />
    </>
  );
};

export default Layout;
