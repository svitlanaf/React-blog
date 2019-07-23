import React, { Component } from "react";
import Post from "./post";
import { getBlog } from "./services/fakeBlogService";

class BlogPostList extends Component {
  state = {
    blog: getBlog(this.props.blogId)
  };

  render() {
    return <Post blogId={this.state.blog.id} />;
  }
}

export default BlogPostList;
