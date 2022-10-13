import React, { Fragment, useState } from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import "../../../service/postServices";
import axios from "axios";
// import { getPost } from "../../../service/postServices";

export const BlogPost = () => {
  const [post, setpost] = useState([
    {
      title: "",
      body: "",
      id: 1,
      userId: 1,
    },
  ]);
  const [update, setupdate] = useState(false);

  axios.defaults.baseURL = "http://localhost:3004/";
  const getPost = () => {
    const data = axios.get("posts?_sort=id&_order=desc");
    // console.log(data)
    setpost(data);
  };
  const postBlog = () => {
    try {
      axios.post("posts", post);
      getPost();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const editPost = () => {
    axios.put(`posts/${post.id}`, post);
    getPost();
    setupdate(false);
  };

  const handleUpdate = (data) => {
    // console.log(data);
    setpost(data)
    setupdate(true)
  };
  const delatePost = (data) => {
    //console.log(data)
    axios.delete("posts/" + data);
    getPost();
  };

  const handleSubmit = () => {
    if (update) {
      editPost();
    } else {
      postBlog();
    }
  };


  return (
    <Fragment>
      <p className="section-title">blog post</p>
      <div className="form-add-post">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          placeholder="add title"
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
        <label htmlFor="body">blog content</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          value={post.body}
          placeholder="add blog content"
          onChange={(e) => setpost({ ...post, body: e.target.value })}
        ></textarea>
        <button className="btn-submit" onClick={handleSubmit()}>
          save
        </button>
      </div>

          <Post key={post.id} data={post} remove={delatePost()} update={handleUpdate()} goFullPost="" />

    </Fragment>
  );
};
