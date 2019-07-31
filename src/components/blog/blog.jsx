import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loadUser } from "../services/userService";
import "./blog.styles.css";
import { deleteBlog } from "../services/blogService";

class Blog extends Component {
  constructor(props) {
    super(props);
    const blogData = this.props.blog.data();
    // console.log(this.props.blog);

    this.state = {
      blog: blogData
    };

    loadUser(blogData.userId)
      .then(userDoc => {
        this.setState({
          user: userDoc.data()
        });
        // console.log(userDoc.data());
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteCurrentBlog = () => {
    deleteBlog(this.props.blog.id).then(() => {
      this.props.onDelete();
    });
  };

  render() {
    return (
      <div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <div className="cover">
                <img
                  className="card-image"
                  src="https://www.roboticsbusinessreview.com/wp-content/uploads/2018/09/Fusion_world-1000x500.jpg"
                  alt="cover"
                />
              </div>
              <div className="user">
                {this.state.blog.avatar ? (
                  <img
                    className="img-circle"
                    src={this.state.blog.avatar}
                    alt="user-avatar"
                  />
                ) : (
                  <img
                    className="img-circle"
                    src="https://cdn3.vectorstock.com/i/thumb-large/83/12/creative-of-default-avatar-vector-21118312.jpg"
                    alt="defaul user avatar"
                  />
                )}
              </div>
              <div className="content">
                <div className="main">
                  <p className="title">{this.state.blog.title}</p>
                  <p className="text-center">{this.state.blog.about}</p>
                  <p className="name">
                    {this.state.user ? this.state.user.displayName : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="content">
                <div className="main">
                  <div id="about_title">About this blog</div>
                  <p id="about_content" className="text-center">
                    {this.state.blog.aboutBlog}
                  </p>

                  <a
                    href={this.state.blog.inLink}
                    id="linkedin"
                    className="social-icon linkedin animate"
                  >
                    <span className="fa fa-linkedin" />
                  </a>

                  <a
                    href={this.state.blog.ghLink}
                    id="github"
                    className="social-icon github animate"
                  >
                    <span className="fa fa-github-alt" />
                  </a>
                </div>
                <div className="row">
                  <div className="col-6">
                    <Link
                      to={`/blogs/${this.props.blog.id}/posts`}
                      id="read_posts"
                      className="btn btn-primary"
                    >
                      Read posts
                    </Link>
                  </div>

                  {this.props.showDelete ? (
                    <div className="col-6">
                      <button
                        onClick={this.deleteCurrentBlog}
                        id="delete_blog"
                        className="btn btn-danger"
                      >
                        Delete blog
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
