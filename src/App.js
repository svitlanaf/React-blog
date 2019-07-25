import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import NavBar from "./components/navbar";
import SignInAndSignUp from "./components/signInAndSignUp";
import BlogList from "./components/blogList";
import NotFound from "./components/notFound";
import Communities from "./components/communities";
import Home from "./components/home";
import NewBlogForm from "./components/newBlogForm";
import NewPostForm from "./components/newPostForm";
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
            <Route path="/new-blog" component={NewBlogForm} />
            <Route path="/blogs/:id" component={PostList} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/home" component={Home} />
            <Route path="/blogs" component={BlogList} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/new-post" component={NewPostForm} />
            <Route path="/sign-in" component={SignInAndSignUp} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
