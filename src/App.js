import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import NavBar from "./components/navbar";
import SignInAndSignUp from "./components/signInAndSignUp";
import BlogList from "./components/blogList";
import NotFound from "./components/notFound";
import Communities from "./components/communities";
import BlogForm from "./components/blogForm";
import PostForm from "./components/postForm";
import PostList from "./components/postList";
import PostDetails from "./components/postDetails";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar currentUser={this.state.currentUser} />
        <main className="container">
          <Switch>
            <Route path="/communities" component={Communities} />
            <Route
              path="/new-blog"
              render={props => (
                <BlogForm {...props} currentUser={this.state.currentUser} />
              )}
            />
            <Route
              exact
              path="/blogs/:id/posts"
              render={props => (
                <PostList {...props} currentUser={this.state.currentUser} />
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={props => (
                <PostDetails {...props} currentUser={this.state.currentUser} />
              )}
            />
            <Route exact path="/blogs" component={BlogList} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/posts/edit/:id" component={PostForm} />
            <Route path="/blogs/:blogId/posts/new-post" component={PostForm} />
            <Route
              path="/sign-in"
              render={props => (
                <SignInAndSignUp
                  {...props}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Redirect from="/" exact to="/blogs" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
