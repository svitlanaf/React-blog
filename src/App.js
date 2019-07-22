import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";
import BlogList from "./components/blogList";
// import SearchBlogs from "./components/searchBlogs";
import NotFound from "./components/notFound";
import Communities from "./components/communities";
import Home from "./components/home";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ToastContainer /> */}
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/communities" component={Communities} />
            <Route path="/home" component={Home} />
            <Route path="/blogs" component={BlogList} />
            {/* <Route path="/search-blogs" component={SearchBlogs} /> */}
            <Route path="/register" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
