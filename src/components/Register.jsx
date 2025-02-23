import React from "react";

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px", border: "2px solid yellow" }}>
        <h2 className="text-center mb-3">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          {/*  Register Button Centered Correctly */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
