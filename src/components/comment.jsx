import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6>{this.props.comment.content}</h6>

        {/* <Link
          to={`/posts/edit/${this.props.comment.id}`}
          className="btn btn-primary"
        >
          Edit
        </Link> */}
      </div>
    );
  }
}

export default Comment;
