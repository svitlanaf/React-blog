import React, { Component } from "react";
import "./comment.styles.css";
import { getUser } from "../services/fakeUserService";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getUser(this.props.comment.userId)
    };
  }

  render() {
    return (
      <div>
        <h6>{this.props.comment.content}</h6>
        <p id="userName">{this.state.user.name}</p>
      </div>
    );
  }
}

export default Comment;
