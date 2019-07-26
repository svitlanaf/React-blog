import React, { Component } from "react";
import CommentList from "./commentList";
import CommentForm from "./commentForm";

import { getPost } from "./services/fakePostService";
import { getComments } from "./services/fakeCommentService";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: getPost(props.match.params.id),
      comments: getComments(props.match.params.id)
    };
  }

  handleCommentAdded = newComment => {
    const comments = getComments(this.state.post.id);
    this.setState({
      comments: comments
    });
    console.log(comments);
  };

  render() {
    const post = this.state.post;
    console.log(post);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://mdbootstrap.com/img/Photos/Others/images/30.jpg"
          alt="bla"
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
        </div>
        <CommentForm
          postId={post.id}
          userId="1"
          onCommentAdded={this.handleCommentAdded}
        />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default PostDetails;
