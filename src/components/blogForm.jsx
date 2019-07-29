import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveBlog } from "./services/fakeBlogService";

class BlogForm extends Form {
  state = {
    data: {
      autor: "",
      title: "",
      about: "",
      aboutBlog: "",
      inLink: "",
      ghLink: ""
      // avatar: ""
    },
    errors: {}
  };

  schema = {
    id: Joi.string(),
    autor: Joi.string()
      .required()
      .label("Autor"),
    title: Joi.string()
      .required()
      .label("Title"),
    about: Joi.string()
      .required()
      .label("About"),
    aboutBlog: Joi.string()
      .required()
      .label("More about blog"),
    inLink: Joi.string().label("LinkedIn"),
    ghLink: Joi.string().label("GitHub")
  };

  hasCurrentUser() {
    return this.props.currentUser;
  }

  doSubmit = () => {
    const blog = this.state.data;
    blog.userId = this.props.currentUser.id;
    saveBlog(blog);
    this.props.history.push("/blogs");
  };

  render() {
    return (
      <div>
        <h1>Start Your Blog</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("autor", "Autor")}
          {this.renderInput("title", "Title")}
          {this.renderInput("about", "About")}
          {this.renderTextArea("aboutBlog", "More about blog")}
          {this.renderInput("inLink", "LinkedIn")}
          {this.renderInput("ghLink", "GitHub")}
          {/* {this.renderInput("avatar", "Avatar")} */}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default BlogForm;
