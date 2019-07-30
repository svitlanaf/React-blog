import React, { Component } from "react";
import Post from "./post";
import { Link } from "react-router-dom";
import { getPosts, loadPosts } from "./services/fakePostService";
import { getBlog, loadBlog } from "./services/fakeBlogService";

class PostList extends Component {
  constructor(props) {
    super(props);
    loadBlog(this.props.match.params.id)
      .then(blogDoc => {
        loadPosts(this.props.match.params.id)
          .then(posts => {
            this.setState({
              blog: blogDoc.data(),
              posts
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });

    this.state = {
      posts: []
    };
  }

  isCurrentUserAuthor() {
    return (
      this.props.currentUser &&
      this.state.blog &&
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
          <Post
            post={p.data()}
            postId={p.id}
            key={p.id}
            userId={this.state.blog.userId}
            showEdit={this.isCurrentUserAuthor()}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
