import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link
          to="/new-blog"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New Blog
        </Link>

        <Link
          to="/new-post"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New post
        </Link>
      </div>
    );
  }
}

export default Home;
