import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { loadPost, savePost } from "./services/postService";

class PostForm extends Form {
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

    loadPost(postId)
      .then(postDoc => {
        this.setState({ data: this.mapToViewModel(postDoc.data()) });
      })
      .catch(error => {
        this.props.history.replace("/not-found");
      });
  }

  mapToViewModel(post) {
    return {
      blogId: post.blogId,
      title: post.title,
      content: post.content
    };
  }

  doSubmit = () => {
    savePost(this.props.match.params.id, this.state.data)
      .then(post => {
        this.props.history.push(`/blogs/${this.state.data.blogId}/posts`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderTextArea("content", "Content")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default PostForm;
