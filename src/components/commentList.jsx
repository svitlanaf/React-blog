import React, { Component } from "react";
import Comment from "./comment/comment";

class CommentList extends Component {
  render() {
    const { length: count } = this.props.comments;

    if (count === 0)
      return (
        <div>
          <p>There are no comments yet.</p>
        </div>
      );

    return (
      <div>
        {this.props.comments.map(c => (
          <Comment comment={c} key={c.id} />
        ))}
      </div>
    );
  }
}

export default CommentList;
