import React, { Component } from "react";
import CommentList from "./commentList";
import CommentForm from "./comment/commentForm";
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

  handleCommentAdded = () => {
    const comments = getComments(this.state.post.id);
    this.setState({
      comments: comments
    });
  };

  isCurrentUser() {
    return this.props.currentUser;
  }

  renderNewCommentFormIfNeeded() {
    if (this.isCurrentUser()) {
      return (
        <CommentForm
          postId={this.state.post.id}
          userId={this.props.currentUser.id}
          onCommentAdded={this.handleCommentAdded}
        />
      );
    }
  }

  render() {
    const post = this.state.post;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
            alt="bla"
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            {/* <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> */}
          </div>
        </div>
        <CommentList comments={this.state.comments} />
        <p />
        {this.renderNewCommentFormIfNeeded()}
      </div>
    );
  }
}

export default PostDetails;
