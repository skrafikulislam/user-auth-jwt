import React from "react";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  return (
    <div className="home-main">
      <h1>This is home page with register component. route = "/" </h1>
      <SignUpForm />
    </div>
  );
};

export default Home;
