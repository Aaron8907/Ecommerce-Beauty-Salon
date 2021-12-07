import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState'

function Nav() {
// accesar al store provider para tener firstName
const [state, dispatch] = useStoreContext();
// console.log(state);
  function showNavigation(name) {
    console.log(name, state);
    // recibe argumento/prop
    if (Auth.loggedIn()) {
      // console.log(Auth)
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            
              Hello {name}          
            
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
        {showNavigation(state.firstName)}
        
      </nav>
    </header>
  );
}

export default Nav;
