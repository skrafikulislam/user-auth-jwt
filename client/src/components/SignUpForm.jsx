import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/register`, { name, email, password })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message));
    setName("");
    setPassword("");
    setEmail("");
    navigate("/login");
  };
  return (
    <div className="form-main">
      <div className="form-content">
        <h1>This Is SignUp/Register Form</h1>
        <form action="">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
        <button onClick={handleSubmit}>Click Here To Submit</button>
      </div>
      <div className="button-back">
        <Link to="login" className="btn-link">
          Click To Login
        </Link>
        <p>Already Have an Account, Login</p>
      </div>
    </div>
  );
};

export default SignUpForm;
