import React, { Component } from "react";
import Post from "./post";
import { Link } from "react-router-dom";
import { getPosts } from "./services/fakePostService";
import { getBlog } from "./services/fakeBlogService";

class PostList extends Component {
  state = {
    posts: [],
    blogId: ""
  };

  componentDidMount() {
    const blogId = {...getBlog.id};
    this.setState({ posts: getPosts(this.props.match.params.id), blogId});
  }

  render() {
    const { length: count } = this.state.posts;

    if (count === 0) return (
    <div>
    <p>There are no posts yet.</p>

    <Link
          to="/posts/new-post"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Add post
        </Link>
      </div>
    );

    return (
      <div>
        <Link
          to="/posts/new-post"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Add post
        </Link>

        {this.state.posts.map(p => (
          <Post post={p} key={p.id}  />
        ))}
        
      </div>
    );
  }
}

export default PostList;
