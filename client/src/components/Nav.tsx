import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => (
  <nav id="navbar">
    <div className="link-container">
      <div className="link">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </div>
      <div className="link">
        <li>
          <NavLink to="/Misdemeanor">Misdemeanor</NavLink>
        </li>
      </div>
      <div className="link">
        <li>
          <NavLink to="/Confession">Confess to us</NavLink>
        </li>
      </div>
    </div>
  </nav>
);

export default Nav;
