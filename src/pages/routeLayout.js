import { Outlet } from "react-router-dom";
import MainNav from "../components/mainNav";

const RouteLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default RouteLayout;
