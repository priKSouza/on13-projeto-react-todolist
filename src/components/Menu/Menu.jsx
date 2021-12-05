import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="nav-header">
      <ul className="navbar">
        <li className="links-header">
          <Link to="/">Home</Link>
        </li>
        <li className="links-header">
          <Link to="/todolist">To Do List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
