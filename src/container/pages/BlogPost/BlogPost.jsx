import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
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
    isUpdate: false,
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
          }
        })
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  putDataToAPi = () => {
    axios
      .put("http://localhost:3004/posts/" + this.state.formBlogPost.id, this.state.formBlogPost)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
          }
        })
      });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleRemove = (data) => {
    //console.log(data)
    axios.delete("http://localhost:3004/posts/" + data).then((res) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    // console.log("form changed", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPi();
    } else {
      this.postDataToAPI();
    }
  };

  handleFullPost = (id) => {
    this.props.history.push(`/fullpost/${id}`);
  };

  componentDidMount() {
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
            value={this.state.formBlogPost.title}
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">blog content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={this.state.formBlogPost.body}
            placeholder="add blog content"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            save
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goFullPost={this.handleFullPost}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;