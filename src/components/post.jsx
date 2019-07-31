import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loadUser } from "./services/userService";
import { deletePost } from "./services/postService";
// import { getBlog } from "./services/fakeBlogService";

class Post extends Component {
  constructor(props) {
    super(props);
    let content = this.props.post.content;
    let shortContent = content.split(" ", 15).join(" ") + "...";

    loadUser(this.props.userId)
      .then(userDoc => {
        this.setState({
          user: userDoc.data()
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.state = {
      shortContent: shortContent
    };
  }

  deleteCurrentPost = () => {
    deletePost(this.props.postId).then(() => {
      this.props.onDelete();
    });
  };

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
          alt="bla"
        />
        <div className="card-body">
          <h3 className="card-title">{this.props.post.title}</h3>
          <p className="post-card-text">{this.state.shortContent}</p>
          <div className="row">
            <div className="col-6">
              <Link
                to={`/posts/${this.props.postId}`}
                className="btn btn-primary"
              >
                Read more
              </Link>
              {this.props.showEdit ? (
                <div>
                  <Link
                    to={`/posts/edit/${this.props.postId}`}
                    className="btn btn-primary"
                    id="edit_post"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={this.deleteCurrentPost}
                    id="delete_post"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-6">
              <p className="post_autor">
                By {this.state.user ? this.state.user.displayName : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
