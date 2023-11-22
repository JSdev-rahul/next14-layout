import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

export const menuItems = [
  {
    menu: "Dashboard",
    link: "/dashboard",
    Icon: <MdDashboard />,
  },
  {
    menu: "Products",
    link: "/products",
    Icon: <FaBagShopping />,
  },
  {
    menu: "About",
    link: "/aboute",
    Icon: <FcAbout  />,
  },
  {
    menu: "Profile",
    link: "/profile",
    Icon: <CgProfile />,
  },
];
