import React from "react";

export const Post = (props) => {
    return (
        <div className="post">
          <div className="img-thumb">
            <img src="https://placeimg.com/200/150/tech" alt="img" />
          </div>
          <div className="content">
            <p className="title" onClick={() => props.goFullPost(props.data.id)}>{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className="update" onClick={() => props.update(props.data)}>Edit</button>
            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
          </div>
        </div>
    )
}