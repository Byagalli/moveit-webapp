import React from 'react';
import './ContactUs.css'// Assuming you have a CSS file for styling

function ContactUs() {
  return (
    <div id='contact-us' className="container pt-5 mt-3">
    <div id="contact" className="container  my-5 p-4 bg-white shadow rounded">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h5>📞 Phone</h5>
          <p>+91 98765 43210</p>

          <h5>📧 Email</h5>
          <p>support@moveit.in</p>

          <h5>📍 Address</h5>
          <p>123 Movers Street,<br />Bangalore, Karnataka, India</p>
        </div>

        <div className="col-md-6">
          <iframe
            title="Office Map"
            src="https://maps.google.com/maps?q=bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0, width: '100%', height: '250px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
