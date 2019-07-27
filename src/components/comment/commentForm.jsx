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

{
  /* <div className="col-sm-1">
<div className="img-circle">
<img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{width="200", height="300"}} />
</div>
</div>

<div class="col-sm-5">
<div class="panel panel-default">
<div class="panel-heading">
<strong>myusername</strong> <span class="text-muted">commented 5 days ago</span>
</div>
<div class="panel-body">
Panel content
</div>
</div>
</div>
</div> */
}
