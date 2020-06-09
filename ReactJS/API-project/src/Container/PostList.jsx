import React, { Component } from "react";
import PostItem from "./PostItem";
import CallAPI from "./CallingAPI";

class PostList extends Component {
  state = {
    posts: [],
    comments: [],
    error: "Oh no!"
  };

  componentDidMount = async () => {
    const posts = await CallAPI(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
    );
    this.setState({ posts });
  };

  handleShowComments = async val => {
    const comments = await CallAPI(
      `https://jsonplaceholder.typicode.com/comments?postId=${val}`
    );
    // this.setState({comments})
    console.log("showing comments for the post id", val, comments);
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Post List</h1>
        {posts.length === 0 ? (
          <div
            style={{
              width: 300,
              height: 300,
              background: "blue",
              fontSize: 36,
              color: "white"
            }}
          >
            Loading
          </div>
        ) : null}
        {posts.map((item, index) => (
          <div key={index}>
            <PostItem
              title={item.title}
              body={item.body}
              postId={item.id}
              onShowComments={this.handleShowComments}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
