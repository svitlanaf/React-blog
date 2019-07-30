import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loadUser } from "./services/fakeUserService";
import { getBlog } from "./services/fakeBlogService";

class Post extends Component {
  constructor(props) {
    super(props);
    let content = this.props.post.content;
    let short_content = content.split(" ", 15).join(" ") + "...";

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
      short_content: short_content
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
          <p className="card-text">{this.state.short_content}</p>
          <div className="row">
            <div className="col-6">
              <Link
                to={`/posts/${this.props.postId}`}
                className="btn btn-primary"
              >
                Read more
              </Link>
              {this.props.showEdit ? (
                <Link
                  to={`/posts/edit/${this.props.postId}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
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
