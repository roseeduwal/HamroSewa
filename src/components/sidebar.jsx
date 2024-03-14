import { NavLink } from "react-router-dom";
import Loader from "./loader";

export default function Sidebar() {
  const menus = [
    {
      name: "My Profile",
      path: "/dashboard/profile",
    },

    {
      name: "Service",
      path: "/dashboard/services",
    },
    {
      name: "My Reviews",
      path: "/dashboard/my-reviews",
    },
  ];
  return (
    <div className="col-3 bg-white p-2 side user">
      {menus?.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          className={({ isActive }) =>
            isActive ? `btn btn-primary myprofile` : `btn myprofile`
          }
        >
          {menu.name}
        </NavLink>
      ))}

      <Loader />
    </div>
  );
}
