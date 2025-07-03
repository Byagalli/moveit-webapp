import React from 'react';
import { FaTruckMoving, FaShieldAlt, FaClock, FaSmile } from 'react-icons/fa';
import './FeaturesUs.css'; // Assuming you have a CSS file for styling  

function FeaturesUs() {
  return (
    <section className="why-choose-section py-5 mt-5" id="features">
      <div className="container text-center">
        <h2 className="fw-bold mb-3" data-aos="fade-down">Why Choose <span className="text-primary">Move It?</span></h2>
        <p className="text-muted mb-5" data-aos="fade-down" data-aos-delay="100">
          We go the extra mile to make your move stress-free and reliable.
        </p>

        <div className="row g-4">
          <FeatureCard
            icon={<FaTruckMoving />}
            title="Professional Movers"
            desc="Experienced and trained movers who handle your belongings with care."
            delay="0"
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Safe & Secure"
            desc="Insurance options and secure packing to protect your valuables."
            delay="100"
          />
          <FeatureCard
            icon={<FaClock />}
            title="On-Time Delivery"
            desc="Punctual pickups and drop-offs—your time matters."
            delay="200"
          />
          <FeatureCard
            icon={<FaSmile />}
            title="Customer Satisfaction"
            desc="24/7 support and 5-star rated service. Your happiness is our priority."
            delay="300"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="feature-card p-4 shadow-sm h-100 bg-white rounded text-center">
        <div className="icon-circle mb-3 text-primary fs-2">
          {icon}
        </div>
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted small">{desc}</p>
      </div>
    </div>
  );
}

export default FeaturesUs;
