import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveNewBlog } from "./services/blogService";
import ImageUpload from "../components/imgUpload";

class BlogForm extends Form {
  state = {
    data: {
      title: "",
      about: "",
      aboutBlog: "",
      inLink: "",
      ghLink: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .max(20)
      .label("Title"),
    about: Joi.string()
      .required()
      .max(120)
      .label("About"),
    aboutBlog: Joi.string()
      .required()
      .max(350)
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
    saveNewBlog(blog).then(blogDoc => {
      this.props.history.push("/blogs");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("about", "About")}
          {this.renderTextArea("aboutBlog", "More about blog")}
          {this.renderInput("inLink", "LinkedIn")}
          {this.renderInput("ghLink", "GitHub")}
          <ImageUpload />
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default BlogForm;
