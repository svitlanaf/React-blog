import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./services/fakePostService";
import { getBlogs } from "./services/fakeBlogService";

class Post extends Component {
  state = {
    blogs: getBlogs(),
    posts: getPosts(this.props.blogId)
  };

  render() {
    const { length: count } = this.state.posts;
    console.log(this.state.posts);
    if (count === 0) return <p>There are no posts yet.</p>;
    return (
      <div>
        {this.state.posts.map(post => (
          <div className="card" key={post.id}>
            <img
              className="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/45.jpg"
              alt="bla"
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              <Link to className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
