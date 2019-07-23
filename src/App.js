import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";
import BlogList from "./components/blogList";
import NotFound from "./components/notFound";
import Communities from "./components/communities";
import Home from "./components/home";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NewBlogForm from "./components/newBlogForm";
import NewPostForm from "./components/newPostForm";
import BlogDetails from "./components/blogDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/communities" component={Communities} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="/home" component={Home} />
            <Route path="/blogs" component={BlogList} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/new-blog" component={NewBlogForm} />
            <Route path="/new-post" component={NewPostForm} />
            <Redirect to="/not-found" />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
