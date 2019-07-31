import React, { Component } from "react";
import "./comment.styles.css";
import { loadUser } from "../services/userService";
// import { getUser } from "../services/fakeUserService";

class Comment extends Component {
  constructor(props) {
    super(props);

    loadUser(this.props.comment.userId)
      .then(userDoc => {
        this.setState({
          user: userDoc.data()
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div>
        <h6>{this.props.comment.content}</h6>
        <p id="userName">{this.state.user.displayName}</p>
      </div>
    );
  }
}

export default Comment;
