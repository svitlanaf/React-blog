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

  handleCommentAdded = newComment => {
    const comments = getComments(this.state.post.id);
    this.setState({
      comments: comments
    });
  };

  render() {
    const post = this.state.post;
    return (
      <div>
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
        </div>
        <CommentList comments={this.state.comments} />
        {/* {currentUser ? ( */}
        <CommentForm
          postId={post.id}
          userId="1" //loged in userid
          onCommentAdded={this.handleCommentAdded}
        />
        {/* ) : (
          <p>Please logon to add comment.</p>
        )} */}
      </div>
    );
  }
}

export default PostDetails;
