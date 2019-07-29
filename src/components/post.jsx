import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "./services/fakeUserService";
import { getBlog } from "./services/fakeBlogService";

class Post extends Component {
  constructor(props) {
    super(props);
    let blog = getBlog(this.props.post.blogId)

    this.state = {
    user: getUser(blog.userId)
    };
  }


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
          <div className="row">
          <div className="col-6">
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
          <div className="col-6">
          <p className="post_autor">By   {this.state.user.name}</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
