import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="navbar">
      {!isAuthenticated && (
        <>
          <button onClick={() => loginWithRedirect({})}>Log in</button>
          <li className="navbar-links">
            <Link to="/">Home</Link>
          </li>
        </>
      )}

      {isAuthenticated &&
        <>
          <button onClick={() => logout()}>Log out</button>
          <ul>
            <li className="navbar-links">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-links">
              <Link to="/createbusinessprofile">Create Profile</Link>
            </li>
            <li className="navbar-links">
              <Link to="/businessinfo">View Profile</Link>
            </li>
          </ul>
        </>
      }
    </div>
  );
};

export default NavBar;