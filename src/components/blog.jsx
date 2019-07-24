import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            alt="bla"
          />

          <div className="card-body">
            <h5 className="card-title">{this.props.blog.title}</h5>
            <h6 className="font-italic">{this.props.blog.autor}</h6>
            <p className="card-text">{this.props.blog.about}</p>
            <Link
              to={`/blogs/${this.props.blog.id}`}
              className="btn btn-primary"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
