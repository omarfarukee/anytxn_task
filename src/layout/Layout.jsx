
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
          <Navbar/>
          <Outlet/>
        </div>
    );
};

export default Layout;