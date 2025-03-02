import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(gmail, password);
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4 shadow-lg"
          style={{ width: "350px", border: "2px solid yellow", borderRadius: "10px" }}
        >
          <h2 className="text-center mb-3">Login</h2>
          <form onSubmit={loginHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
