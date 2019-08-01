import React, { Component } from "react";
import Blog from "./blog/blog";
import { loadAllBlogs } from "./services/blogService";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    blogs: []
  };
}

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

  isCurrentUserAuthor(blog) {
    return (
      this.props.currentUser &&
      blog &&
      blog.data().userId === this.props.currentUser.id
    );
  }

  onBlogDeleted = () => {
    loadAllBlogs()
      .then(blogs => {
        this.setState({
          blogs
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { length: count } = this.state.blogs;

    if (count === 0) return <p>There are no blogs yet.</p>;
    return (
      <div>
        {this.state.blogs.map(b => {
          return (
            <Blog
              blog={b}
              key={b.id}
              showDelete={this.isCurrentUserAuthor(b)}
              showEdit={this.isCurrentUserAuthor()}
              onDelete={this.onBlogDeleted}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogList;
