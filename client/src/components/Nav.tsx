import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => (
  <nav id="navbar" style={{ width: "100%" }}>
    <ul style={{ width: "100%" }}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Misdemeanor">Misdemeanor</NavLink>
      </li>
      <li>
        <NavLink to="/Confession">Confess to us</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
