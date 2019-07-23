import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getPost, savePost } from "./services/fakePostService";

class NewPostForm extends Form {
  state = {
    data: {
      title: "",
      content: ""
    },
    errors: {}
  };

  schema = {
    id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    content: Joi.string()
      .required()
      .label("Content")
  };

  componentDidMount() {
    // axios.get("");
    const postId = this.props.match.params.id;
    if (postId === "new-post") return;

    const post = getPost(postId);
    if (!post) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(post) });
  }

  mapToViewModel(post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content
    };
  }

  doSubmit = () => {
    savePost(this.state.data);
    this.props.history.push("/blogs");
  };

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("content", "Content")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewPostForm;
