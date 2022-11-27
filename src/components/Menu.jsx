import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const Menu = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Vakantieplanner</Link>
      </div>
      <div id="navbar">
        <ul className="nav navbar-nav">
          <li><Link to="/">Mijn vakanties</Link></li>
          <li><Link to="/books/new">Nieuwe vakantie</Link></li>
          <li><Link to="/secret">Admin only</Link></li>
        </ul>
        <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
        <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
          Signed in as {UserService.getUsername()}
        </p>
      </div>
    </div>
  </nav>
)

export default Menu
