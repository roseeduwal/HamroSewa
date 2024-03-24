import { NavLink } from "react-router-dom";
import Iconify from "./iconify";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();
  const menus = [
    {
      name: "My Profile",
      path: "/dashboard/profile",
      icon: <Iconify icon="iconamoon:profile-fill" />,
      access: ["user", "admin", "professional"],
    },

    {
      name: "Services",
      path: "/dashboard/services",
      icon: <Iconify icon="material-symbols:home-repair-service-rounded" />,
      access: ["admin"],
    },

    {
      name: "Booked Services",
      path: "/dashboard/book-services",
      icon: <Iconify icon="fluent-emoji-high-contrast:shopping-cart" />,
      access: ["user", "admin", "professional"],
    },
    {
      name: "My Reviews",
      path: "/dashboard/my-reviews",
      icon: <Iconify icon="material-symbols:comment" />,
      access: ["user"],
    },
    {
      name: "Categories",
      path: "/dashboard/categories",
      icon: <Iconify icon="tabler:category-filled" />,
      access: ["admin"],
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <Iconify icon="oui:users" />,
      access: ["admin"],
    },
    {
      name: "Professionals",
      path: "/dashboard/professionals",
      icon: <Iconify icon="pajamas:work" />,
      access: ["admin"],
    },
  ];
  return (
    <div className="col-2 p-2 d-flex flex-column">
      {menus
        ?.filter((menu) => menu.access.includes(user.role.toLowerCase()))
        .map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            style={{
              marginTop: "20px",
              textDecoration: "none",
              textAlign: "center",
              padding: "5px 0",
            }}
            className={({ isActive }) =>
              isActive ? `bg-secondary text-white rounded` : `text-secondary`
            }
          >
            <div className="d-flex align-items-center">
              {menu.icon}
              {menu.name}
            </div>
          </NavLink>
        ))}
    </div>
  );
}
