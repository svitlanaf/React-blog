import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
          alt="bla"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <p className="card-text">{this.props.post.content}</p>
          <Link to={`/posts/${this.props.post.id}`} className="btn btn-primary">
            Read more
          </Link>
          {this.props.showEdit ? (
            <Link
              to={`/posts/edit/${this.props.post.id}`}
              className="btn btn-primary"
            >
              Edit
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Post;
