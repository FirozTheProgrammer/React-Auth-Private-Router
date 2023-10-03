import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <></>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/orders"}>Orders</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Private Route</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <span>{user.email}</span>
            <a className="btn" onClick={handleLogOut}>
              Log Out
            </a>
          </>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="btn">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
