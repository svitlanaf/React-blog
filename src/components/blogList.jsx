import React, { Component } from "react";
import Blog from "./blog/blog";
import { loadAllBlogs } from "./services/fakeBlogService";

class BlogList extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    loadAllBlogs()
      .then(blogs => {
        this.setState({
          blogs
        });
      })
      .catch(error => {
        console.log(error);
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
