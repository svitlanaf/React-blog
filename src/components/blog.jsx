import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "./services/fakeBlogService";

class Blog extends Component {
  state = {
    blogs: getBlogs()
  };

  render() {
    const { length: count } = this.state.blogs;

    if (count === 0) return <p>There are no blogs yet.</p>;
    return (
      <div>
        {this.state.blogs.map(blog => (
          <div className="card" key={blog.id}>
            <img
              className="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              alt="bla"
            />

            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <h6 className="font-italic">{blog.autor}</h6>
              <p className="card-text">{blog.about}</p>
              <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
