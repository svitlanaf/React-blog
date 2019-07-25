import React, { Component } from "react";
import { getPost } from "./services/fakePostService";

class PostDetails extends Component {
        state = {
        post: {}
    }
    componentDidMount() {
        this.setState({
          post: getPost(this.props.match.params.id)
        });
        console.log(this.props.match.params.id);
      }
    
    render() {
      return (
        <div className="card">
          <img
            className="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/30.jpg"
            alt="bla"
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.post.title}</h5>
            <p className="card-text">{this.state.post.content}</p>
            </div>
        
        </div>
      );
    }
 
}
  
  export default PostDetails;
  