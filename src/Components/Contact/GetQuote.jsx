import React, { useState } from 'react';

function GetQuote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your quote request has been submitted!");
    // Later: send to backend or email service
  };

  return (
    <div id='get-quote' className="container pt-5 mt-3">
    <div className="container my-5 p-4 bg-light shadow rounded" style={{ maxWidth: '700px' }}>
      <h2 className="text-center mb-4 text-danger">Get a Free Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Moving">Moving</option>
            <option value="Storage">Storage</option>
            <option value="Packing">Packing</option>
          </select>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Tell us more..."
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-danger w-100 fw-semibold">Request Quote</button>
      </form>
    </div>
    </div>
  );
}

export default GetQuote;
