import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getBlog, saveBlog } from "./services/fakeBlogService";

class NewBlogForm extends Form {
  state = {
    data: {
      title: "",
      about: ""
    },
    errors: {}
  };

  schema = {
    id: Joi.string(),
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
      title: blog.brand,
      about: blog.name
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
          {this.renderInput("title", "Title")}
          {this.renderInput("about", "About")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewBlogForm;
