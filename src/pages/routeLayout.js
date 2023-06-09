import { Outlet } from "react-router-dom";
import MainNav from "../components/mainNav";

const RouteLayout = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RouteLayout;
