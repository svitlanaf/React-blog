import React, { Component } from "react";
import Post from "./post";
import { getPosts } from "./services/fakePostService";

class BlogPostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({
      posts: getPosts(this.props.match.params.id)
    });
  }

  render() {
    const { length: count } = this.state.posts;

    if (count === 0) return <p>There are no posts yet.</p>;
    return (
      <div>
        {this.state.posts.map(p => (
          <Post post={p} key={p.id} />
        ))}
      </div>
    );
  }
}

export default BlogPostList;
