import React from "react";
import { Link } from "react-router-dom";
import "./FooterUs.css"; // Assuming you have a CSS file for styling
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterUs = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-3 mb-4">
            <h4 className="text-uppercase fw-bold">Move It</h4>
            <p>We move with joy — making your journey smooth and stress-free.</p>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <Link to="/" className="text-light text-decoration-none">
                <li className="mb-2">Home</li>
              </Link>
              <Link to="/About" className="text-light text-decoration-none">
                <li className="mb-2">About</li>
              </Link> 
              <Link to="/Pricing" className="text-light text-decoration-none">
                <li className="mb-2">Pricing</li>
              </Link> 
              <Link to="/FeaturesUs" className="text-light text-decoration-none">
                <li className="mb-2">Features</li>
              </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <p><FaMapMarkerAlt className="me-2" /> 123 Movers Street,</p>
            <p><FaPhoneAlt className="me-2" /> +1 (800) 123-4567</p>
            <p><FaEnvelope className="me-2" /> support@moveit.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center text-secondary small mb-0">
          &copy; {new Date().getFullYear()} Move It. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterUs;
