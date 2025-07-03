import React from 'react';

function Login() {
  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg border-0" style={{ maxWidth: '420px', width: '100%' }}>
        <h2 className="text-center mb-3 fw-bold">Welcome Back 👋</h2>
        <p className="text-center text-muted mb-4">Login to your account to continue</p>

        <form>
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
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-3 d-flex justify-content-between">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ms-1 small">Remember me</label>
            </div>
            <a href="#" className="small text-decoration-none">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="text-center mt-4 small">
          Don't have an account? <a href="/Signup" className="text-decoration-none">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
