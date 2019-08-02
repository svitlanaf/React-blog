import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveNewBlog, loadBlog, saveBlog } from "./services/blogService";
import ImageUpload from "../components/imgUpload";
import { blockStatement } from "@babel/types";

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

  componentDidMount() {
    const blogId = this.props.match.params.id;

    // if props doesn't have id ->> create new blog
    if (!this.props.match.params.id) {
      this.setState({ data: this.state.data });
      return;
    }

    // if props has blog id ->> edit post
    loadBlog(blogId)
      .then(blogDoc => {
        this.setState({ data: this.mapToViewModel(blogDoc.data()) });
      })
      .catch(error => {
        this.props.history.replace("/not-found");
      });
  }

  mapToViewModel(blog) {
    return {
      title: blog.title,
      about: blog.about,
      aboutBlog: blog.aboutBlog,
      inLink: blog.inLink,
      ghLink: blog.ghLink
    };
  }

  doSubmit = () => {
    const blog = this.state.data;
    blog.userId = this.props.currentUser.id;
    saveBlog(this.props.match.params.id, this.state.data)
      .then(blogDoc => {
        this.props.history.push("/blogs");
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
