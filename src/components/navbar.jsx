import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

function NavBar({ currentUser }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        MyDevBlog
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {currentUser ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/new-blog">
                Add Blog
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {currentUser ? (
            <div
              id="signOut"
              className="nav-item nav-link"
              onClick={() => auth.signOut()}
            >
              Sign out
            </div>
          ) : (
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/sign-in">
                Sign in
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
