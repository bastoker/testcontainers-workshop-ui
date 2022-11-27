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
          <li><Link to="/holiday/new">Nieuwe vakantie</Link></li>
          <li><Link to="/holidays/all">Admin only</Link></li>
        </ul>
        <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
        <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
          Ingelogd als <b>{UserService.getUsername()}</b>
        </p>
      </div>
    </div>
  </nav>
)

export default Menu
