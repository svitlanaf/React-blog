import React, { Component } from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";

class SignInAndSignUp extends Component {
  isCurrentUser() {
    return this.props.currentUser;
  }

  handleSingInOrSignUp = () => {
    this.props.history.push("/blogs");
  };

  renderSignInAndSignUp() {
    if (!this.isCurrentUser()) {
      return (
        <div className="sign-in-and-sign-up">
          <SignIn onSignedIn={this.handleSingInOrSignUp} />
          <SignUp onSignedUp={this.handleSingInOrSignUp} />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderSignInAndSignUp()}</div>;
  }
}

export default SignInAndSignUp;
