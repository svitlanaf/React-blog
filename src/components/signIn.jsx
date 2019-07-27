import React from "react";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import FormInput from "./formInput";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <button type="submit" value="Submit Form">
              Sign In
            </button>
            <button onClick={signInWithGoogle} isgooglesignin="true">
              {" "}
              Sign in with Google{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
