import { Outlet } from "react-router-dom";

//outlet daje możliwość wrzucenia children do route

const NavbarPage = () => {
  return (
    <>
      <Outlet />    
    </>
  );
};

export default NavbarPage;
