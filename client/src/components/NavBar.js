import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import EditBusinessInfo from './EditBusinessInfo';
import BusinessInfo from './BusinessInfo';
import Main from './Main';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className= "navbar">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated &&
      <button onClick={() => logout()}>Log out</button>
    }
    </div>
  );
};

export default NavBar;