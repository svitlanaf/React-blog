import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../services/fakeUserService";
import "./blog.styles.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getUser(this.props.blog.userId)
    };
  }

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
              {this.props.blog.avatar ? (
                  <img
                  className="img-circle"
                  src={this.props.blog.avatar}
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
                  <p className="title">{this.props.blog.title}</p>
                  <p className="text-center">{this.props.blog.about}</p>
                  <p className="name">{this.state.user.name}</p>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="content">
                <div className="main">
                  <p className="text-center">{this.props.blog.aboutBlog}</p>

                  <Link
                    to="#"
                    target="_blank"
                    className="social-icon linkedin animate"
                  >
                    <span className="fa fa-linkedin" />
                  </Link>

                  <Link
                    to="#"
                    target="_blank"
                    className="social-icon github animate"
                  >
                    <span className="fa fa-github-alt" />
                  </Link>
                </div>
                <Link
                  to={`/blogs/${this.props.blog.id}/posts`}
                  className="btn btn-primary"
                >
                  Read posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
