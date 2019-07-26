import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveComment } from "./services/fakeCommentService";

class CommentForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        userId: "",
        content: ""
      },
      errors: {}
    };
  }

  schema = {
    id: Joi.string(),
    userId: Joi.string(),
    content: Joi.string()
      .required()
      .label("Content")
  };

  componentDidMount() {
    //new
    if (this.props.match.params.postId) {
      this.setState({ data: { postId: this.props.match.params.postId } });
      return;
    }
  }

  mapToViewModel(comment) {
    return {
      id: comment.id,
      postId: comment.postId,
      content: comment.content
    };
  }

  doSubmit = () => {
    saveComment(this.state.data);
    this.props.history.push(`/posts/${this.state.data.postId}/comment`);
  };

  render() {
    return (
      <div>
        <h1>New Comment</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("content", "Content")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CommentForm;
