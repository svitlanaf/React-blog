import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { saveNewComment } from "../services/fakeCommentService";

class CommentForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        content: ""
      },
      userId: props.userId,
      postId: props.postId,
      errors: {}
    };
  }

  schema = {
    content: Joi.string()
      .required()
      .label("Content")
  };

  mapToViewModel(comment) {
    return {
      content: comment.content
    };
  }

  doSubmit = () => {
    const comment = {
      userId: this.state.userId,
      postId: this.state.postId,
      content: this.state.data.content
    };
    saveNewComment(comment);
    this.setState({
      data: {
        content: ""
      }
    });
    if (this.props.onCommentAdded) {
      this.props.onCommentAdded(this.state.data);
    }
  };

  render() {
    return (
      <div id="comment">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("content", "Add comment")}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default CommentForm;
