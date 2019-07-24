import React, { Component } from "react";
import SearchBox from "./searchBox";
import PostList from "./postList";
import { getPosts } from "./services/fakePostService";

class Home extends Component {
  state = {
    posts: [],
    searchQuery: ""
  };

  componentDidMount() {
    this.setState({ posts: getPosts() });
  }

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  getPageData = () => {
    const { searchQuery, posts: allPosts } = this.state;

    let filtered = allPosts;
    if (searchQuery)
      filtered = allPosts.filter(p =>
        p.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const posts = filtered;

    return { data: posts };
  };

  render() {
    const { length: count } = this.state.posts;
    const { searchQuery } = this.state;
    if (count === 0) return <p>No posts found.</p>;
    const { data: posts } = this.getPageData();

    return (
      <div>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <PostList />
      </div>
    );
  }
}

export default Home;
