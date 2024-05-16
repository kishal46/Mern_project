import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../../../src/assets/Logo.png';
import { NavLink } from 'react-router-dom';
import Authuse from './UserAuth';

function CollapsibleExample() {
  const { userName } = Authuse(); // Renamed to userName for clarity

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4 navbar-links">
            <NavLink to={"/"} className="nav-link">Home</NavLink>
            <NavLink to={"/service"} className="nav-link">Service</NavLink>
            <NavLink to={"/about"} className="nav-link">About</NavLink>
            <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
            {userName === "admin" && <NavLink to={"/admin"} className="nav-link">Admin</NavLink>}
            {userName && <NavLink to={"/profile"} className="nav-link">Profile</NavLink>}
          </Nav>
          <Nav className="navbar-sign">
            {!userName ? (
              <div id="sign">
                <NavLink to={"/signup"} className="nav-link"><button className="login-button" aria-label="Sign Up">Signup</button></NavLink>
                <NavLink to={"/login"} className="nav-link"><button className="login-button" aria-label="Login">Login</button></NavLink>
              </div>
            ) : (
              <NavLink to={'/profile'}><h5 id="name">{userName}</h5></NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
