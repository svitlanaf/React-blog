import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getBlog, saveBlog } from "./services/fakeBlogService";

class NewBlogForm extends Form {
  state = {
    data: {
      autor: "",
      title: "",
      about: ""
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
      .label("About")
  };

  componentDidMount() {
    // axios.get("");
    const blogId = this.props.match.params.id;
    if (blogId === "new-blog") return;

    const blog = getBlog(blogId);
    if (!blog) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(blog) });
  }

  mapToViewModel(blog) {
    return {
      id: blog.id,
      autor: blog.autor,
      title: blog.title,
      about: blog.about
    };
  }

  doSubmit = () => {
    saveBlog(this.state.data);
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
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewBlogForm;
