import React, { Component } from "react";
import { getBlogs } from "./services/fakeBlogService";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

class Blog extends Component {
  state = {
    blogs: getBlogs()
  };

  render() {
    const { length: count } = this.state.blogs;

    if (count === 0) return <p>There are no blogs yet.</p>;
    return (
      <div>
        {this.state.blogs.map(blog => (
          <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />

              <MDBCardBody>
                {/* key={blog.id} */}
                <MDBCardTitle>{blog.title}</MDBCardTitle>
                <p className="font-weight-bold blue-text">{blog.autor}</p>
                <MDBCardText>{blog.about}</MDBCardText>
                <MDBBtn href="#">Read more</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </div>
    );
  }
}

export default Blog;
