import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import "./Navbar.scss";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const { logout, setRoute } = userContext;

  return (
    <div className="nav">
      <Link className="nav__item" onClick={() => setRoute("homepage")}>
        Home
      </Link>
      <Link className="nav__item" onClick={() => setRoute("forum")}>
        Forums
      </Link>
      <Link className="nav__item" onClick={() => setRoute("settings")}>
        Settings
      </Link>
      <Link className="nav__item" onClick={logout}>
        Sign Out
      </Link>
    </div>
  );
};

export default Navbar;
