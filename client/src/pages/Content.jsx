import React, { useEffect, useState } from "react";
import "./Content.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/content`)
      .then((res) => {
        if (res.data.valid) {
          setMessage(res.data.message);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="content">
      <h2>Password : Babu@906412345</h2>
      <p>{message}</p>
    </div>
  );
};

export default Content;
