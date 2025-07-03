import React from 'react';

function Signup() {
  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg border-0" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-3 fw-bold">Create Account 🚀</h2>
        <p className="text-center text-muted mb-4">Sign up to start managing your move today</p>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm"
              placeholder="Repeat password"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>

        <p className="text-center mt-4 small">
          Already have an account? <a href="/Login" className="text-decoration-none">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
