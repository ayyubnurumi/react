import { Pagination } from "antd";
import axios from "axios";
import React, { Component, Fragment } from "react";
import { Navigate } from "react-router";
import { Post } from "../../../component/Post/Post";
import "./BlogPost.css";

const pagesize = 3

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
    isUpdate: false,
    ellipsis: true,
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
          totalPage: result.length / pagesize,
          minIndex: 0,
          maxIndex: pagesize
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
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  putDataToAPi = () => {
    axios
      .put(
        "http://localhost:3004/posts/" + this.state.formBlogPost.id,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
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

  handlePage = (page) => {
    this.setState({
      current: page,
      minIndex: (page - 1) * pagesize,
      maxIndex: page * pagesize
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPi();
    } else {
      this.postDataToAPI();
    }
  };

  handleFullPost = () => {
    <Navigate to='/fullpost' replace={true} />
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    let { post, formBlogPost, ellipsis, current, minIndex, maxIndex } = this.state;
    return (
      <Fragment>
        <p className="section-title">blog post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formBlogPost.title}
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">blog content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={formBlogPost.body}
            placeholder="add blog content"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            save
          </button>
        </div>
        {post.map((post, index) => {
          return (
            index >= minIndex &&
              index < maxIndex && (
                <Post
                  key={post.id}
                  data={post}
                  ellipsis={ellipsis}
                  remove={this.handleRemove}
                  update={this.handleUpdate}
                  goFullPost={this.handleFullPost}
                />
              )
          );
        })}
        <Pagination
          className="pagination"
          showSizeChanger={false}
          pageSize={pagesize}
          current={current}
          total={post.length}
          onChange={this.handlePage}
        />
      </Fragment>
    );
  }
}

export default BlogPost;