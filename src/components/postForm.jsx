import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getPost, savePost } from "./services/fakePostService";

class NewPostForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        blogId: "",
        title: "",
        content: ""
      },
      errors: {}
    };
  }

  schema = {
    id: Joi.string(),
    blogId: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    content: Joi.string()
      .required()
      .label("Content")
  };

  componentDidMount() {
    // if props has blogId then we create new post
    if (this.props.match.params.blogId) {
      this.setState({ data: { blogId: this.props.match.params.blogId } });
      return;
    }

    // if props has post id then we edit post
    const postId = this.props.match.params.id;
    console.log(this.props.match.params.id);
    console.log(this.props);

    const post = getPost(postId);
    console.log(postId);
    if (!post) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(post) });
  }

  mapToViewModel(post) {
    return {
      id: post.id,
      blogId: post.blogId,
      title: post.title,
      content: post.content
    };
  }

  doSubmit = () => {
    savePost(this.state.data);
    console.log(this.state.data);
    this.props.history.push(`/blogs/posts`);
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
