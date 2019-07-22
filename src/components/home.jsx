import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Here you'll see popular blogs or can start your blog/login.</h1>
      <Link to="/register">Start Your Blog</Link> |{" "}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
