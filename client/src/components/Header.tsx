import Nav from "./Nav";
import "./Header.css";
const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="title-container">
        <p id="top-title">Fakelandia</p>
        <div>
          <p className="title">Justice</p>
        </div>
        <div>
          <p className="title">Department</p>
        </div>{" "}
      </div>
    </div>
    <Nav />
  </header>
);
export default Header;
