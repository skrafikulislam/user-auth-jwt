import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/login`, { email, password })
      .then((res) => {
        if (res.data.Login === true) {
          navigate("/content");
        } else {
          navigate("/");
        }
        console.log(res);
      })
      .catch((err) => console.log(err.message));

    setPassword("");
    setEmail("");
    // navigate("/content");
  };
  return (
    <div className="form-main">
      <div className="form-content">
        <h1>This Is Login Form</h1>
        <form action="">
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="">Your Password</label>
          <input
            type="text"
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </form>
      </div>
      <div className="button">
        <button onClick={handleSubmit}>Click Here To Login</button>
      </div>
      <div className="button-back">
        <Link to="/" className="btn-link">
          Go Back to SignUp Page
        </Link>
      </div>
      <p>Don't Have an Account, SignUp</p>
    </div>
  );
};

export default Login;
