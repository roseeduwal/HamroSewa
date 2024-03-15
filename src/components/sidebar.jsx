import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menus = [
    {
      name: "My Profile",
      path: "/dashboard/profile",
      access: ["user", "admin", "professional"],
    },

    {
      name: "Services",
      path: "/dashboard/services",
      access: ["user", "admin", "professional"],
    },

    {
      name: "Booked Services",
      path: "/dashboard/book-services",
      access: ["user", "admin", "professional"],
    },
    {
      name: "My Reviews",
      path: "/dashboard/my-reviews",
      access: ["user", "admin", "professional"],
    },
    {
      name: "Categories",
      path: "/dashboard/categories",
      access: ["user", "admin", "professional"],
    },
  ];
  return (
    <div className="col-3 bg-white p-2 side user shadow rounded">
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
    </div>
  );
}
