import { Outlet } from "react-router-dom";
import Navbar from "../contents/Navbar";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Rootlayout;
