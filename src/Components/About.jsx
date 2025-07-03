import React from 'react';
import about from '../assets/about.jpg'; // Assuming you have an image in your assets folder

function About() {
  return (
    <div className="container pt-5 mt-5" id="about">
      <h2 className="text-center mb-4 fw-bold">About Us</h2>
      <p className="text-center mb-5 text-muted">
        Learn more about who we are and why we care about your move.
      </p>

      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4">
          <img
            src={about}
            alt="Moving Team"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 mb-4">
          <h4 className="fw-semibold mb-3">We Move with Care & Purpose</h4>
          <p>
            Move It is a modern moving company dedicated to providing hassle-free relocation services
            across the US. Whether it's across town or to a different state, our professional team ensures
            your belongings are handled with care, safety, and efficiency.
          </p>
          <p>
            As a customer-first startup, we combine technology, transparency, and human touch to deliver
            a smooth experience that you can trust.
          </p>
          <ul className="list-unstyled">
            <li>✔ Fully trained & background-checked movers</li>
            <li>✔ Transparent pricing, no hidden fees</li>
            <li>✔ 24/7 customer support</li>
          </ul>
          <button className="btn btn-primary mt-3">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
