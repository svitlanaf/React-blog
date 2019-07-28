import React, { Component } from "react";
import Post from "./post";
import { Link } from "react-router-dom";
import { getPosts } from "./services/fakePostService";
import { getBlog } from "./services/fakeBlogService";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: getPosts(this.props.match.params.id),
      blog: getBlog(this.props.match.params.id)
    };
  }

  isCurrentUserAuthor() {
    return (
      this.props.currentUser &&
      this.state.blog.userId === this.props.currentUser.id
    );
  }

  renderAddPostIfNeeded() {
    if (this.isCurrentUserAuthor()) {
      return (
        <Link
          to={`/blogs/${this.props.match.params.id}/posts/new-post`}
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Add post
        </Link>
      );
    }
  }

  render() {
    const { length: count } = this.state.posts;

    if (count === 0)
      return (
        <div>
          <p>There are no posts yet.</p>
          {this.renderAddPostIfNeeded()}
        </div>
      );

    return (
      <div>
        {this.renderAddPostIfNeeded()}
        {this.state.posts.map(p => (
          <Post post={p} key={p.id} showEdit={this.isCurrentUserAuthor()} />
        ))}
      </div>
    );
  }
}

export default PostList;
