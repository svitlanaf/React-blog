import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  isCurrentUser() {
    return this.props.currentUser;
  }

  renderNewBlogIfNeeded() {
    if (this.isCurrentUser) {
      return (
        <Link
          to="/new-blog"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Add New Blog
        </Link>
      );
    }
  }

  render() {
    return <div>{this.renderNewBlogIfNeeded()}</div>;
  }
}

export default Home;
