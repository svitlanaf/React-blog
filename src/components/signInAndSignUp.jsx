import React, { Component } from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";

class SignInAndSignUp extends Component {
  constructor(props) {
    super(props);
  }

  isCurrentUser() {
    return this.props.currentUser;
  }

  renderSignInAndSignUp() {
    if (!this.isCurrentUser()) {
      return (
        <div className="sign-in-and-sign-up">
          <SignIn />
          <SignUp />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderSignInAndSignUp()}</div>;
  }
}

export default SignInAndSignUp;
