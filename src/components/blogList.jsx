import React, { Component } from "react";
import Blog from "./blog/blog";
import { getBlogs } from "./services/fakeBlogService";

class BlogList extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    this.setState({
      blogs: getBlogs(this.props.match.params.id)
    });
  }

  render() {
    const { length: count } = this.state.blogs;

    if (count === 0) return <p>There are no blogs yet.</p>;
    return (
      <div>
        {this.state.blogs.map(b => (
          <Blog blog={b} key={b.id} />
        ))}
      </div>
    );
  }
}

export default BlogList;
