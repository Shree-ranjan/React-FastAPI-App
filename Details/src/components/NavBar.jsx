// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
// // import Patients from "../Patients";
// // import Vaccines from "../Vaccines";
// // import Centers from "../Centers";
// // import Home from "../Home";

// function NavBar() {
//   return (
//     <Navbar bg="primary" data-bs-theme="dark">
//       <Navbar.Brand as={Link} to={"/"}>
//         Details
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to={"/patients"}>
//             Patients
//           </Nav.Link>
//           <Nav.Link as={Link} to={"/vaccines"}>
//             Vaccines
//           </Nav.Link>
//           <Nav.Link as={Link} to={"/centers"}>
//             Centers
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavBar;

import { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleToggle = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>W</span>ant
            <span>T</span>o<span>K</span>now
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/patients">Patients</NavLink>
            </li>
            <li>
              <NavLink to="/vaccines">Vaccines</NavLink>
            </li>
            <li>
              <NavLink to="/centers">Centers</NavLink>
            </li>
          </ul>
        </div>

        {/* Toggle button for mobile menu */}
        <div className="toggle-button" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* hero section */}
      {/* <section className="hero-section">
        <p>Welcome to</p>
        <h1>Details World</h1>
      </section> */}
    </>
  );
};

export default NavBar;
