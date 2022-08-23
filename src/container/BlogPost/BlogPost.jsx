import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    //console.log(data)
    axios.delete("http://localhost:3004/posts/" + data).then((ress) => {
      this.getPostAPI();
    });
  };

  handleFormChange = () => {
    console.log("form changed");
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) =>
    //     this.setState({
    //       post: json,
    //     })
    //   );
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">blog post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body-content">blog content</label>
          <textarea
            name="body-content"
            id="body-content"
            cols="30"
            rows="10"
            placeholder="add blog content"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit">save</button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
