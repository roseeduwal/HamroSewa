import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSignOutMutation } from "../hooks/useAuth";
import { useCallback } from "react";
import { useSnackbar } from "notistack";

export default function Navbar() {
  const paths = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Service",
      path: "/service",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];
  const { user, isLoggedIn } = useAuthContext();
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = useCallback(
    (data) => {
      if (data.status === 201) {
        dispatch({ type: "LOGOUT" });

        navigate("/");
      }
    },
    [navigate, dispatch]
  );
  const onError = useCallback(
    (data) => {
      if (data?.response?.status === 400) {
        if (Array.isArray(data?.response?.data?.message)) {
          enqueueSnackbar(data.response.data.message[0], {
            variant: "error",
          });
        } else {
          enqueueSnackbar(data?.response?.data?.message, { variant: "error" });
        }
      }
    },
    [enqueueSnackbar]
  );

  const { mutate: signOutMutation } = useSignOutMutation(onSuccess, onError);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <img
            className=" me-3"
            src="https://firebasestorage.googleapis.com/v0/b/shop-a6a23.appspot.com/o/logo%2Flogo.png?alt=media&token=20847445-a0df-430f-b249-b11bc6e8edac"
            style={{ height: "60px", width: "144px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {paths?.map((path, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={path.path}
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link"
                    }
                    aria-current="page"
                  >
                    {path.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            {isLoggedIn ? (
              <>
                <div>{user?.firstName}</div>
                <Link className="btn" to="/dashboard/profile">
                  Dashboard
                </Link>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => signOutMutation()}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link to="/register" className="btn btn-blue me-3">
                  Register
                </Link>
                <Link to="/login" className="btn btn-blue">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
