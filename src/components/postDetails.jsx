import React, { Component } from "react";
import CommentList from "./commentList";
import CommentForm from "./comment/commentForm";
import { loadPost } from "./services/fakePostService";
// import { getComments } from "./services/fakeCommentService";
import { loadComments } from "./services/fakeCommentService";
import Like from "./common/like";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    loadPost(this.props.match.params.id)
      .then(postDoc => {
        this.setState({
          post: postDoc.data()
        });
      })
      .catch(error => {
        console.log(error);
      });

    loadComments(this.props.match.params.id)
      .then(comments => {
        this.setState({
          comments
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.state = {
      post: {},
      comments: []
    };
  }

  handleCommentAdded = () => {
    loadComments(this.props.match.params.id)
      .then(comments => {
        this.setState({
          comments
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLike = post => {
    const blogPost = this.state.post;
    post.liked = !post.liked;
    this.setState({ blogPost });
  };

  isCurrentUser() {
    return this.props.currentUser;
  }

  renderNewCommentFormIfNeeded() {
    if (this.isCurrentUser()) {
      return (
        <CommentForm
          postId={this.props.match.params.id}
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
            <h5 className="card-title">{this.state.post.title}</h5>
            <p className="card-text">{this.state.post.content}</p>
            <Like liked={post.liked} onClick={() => this.handleLike(post)} />
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
