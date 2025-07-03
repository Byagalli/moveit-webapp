
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import PostcodeChecker from './PostcodeChecker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Important for dropdowns
import Moving from './Moving'; // Assuming you have a Moving component
import Storage from './Storage'; // Assuming you have a Storage component

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-boxes me-2" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
          </svg>
          Move It
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/FeaturesUs">Features</Link></li>

            {/* ✅ Fixed Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Moving">Moving</Link></li>
                <li><Link className="dropdown-item" to="/Storage">Storage</Link></li>
              </ul>
            </li>
          </ul>

          {/* ✅ Postcode Checker */}
          <PostcodeChecker />

          {/* ✅ Buttons */}
          <div className="text-end">
            <Link to="/Login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/Signup" className="btn btn-outline-light me-2">Sign-up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

