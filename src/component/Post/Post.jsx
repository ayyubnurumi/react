import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;
export const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/any/greyscale" alt="img" />
      </div>
      <div className="content">
        <Title
          className="Title"
          level={3}
          ellipsis={
            props.ellipsis
              ? {
                  rows: 1,
                  expandable: false,
                }
              : null
          }
          onClick={props.goFullPost(props.data.id)}
        >
          {props.data.title}
        </Title>
        <Paragraph
          className="Paragraph"
          ellipsis={
            props.ellipsis
              ? {
                  rows: 2,
                  expandable: false,
                  symbol: "more",
                }
              : null
          }
        >
          {props.data.body}
        </Paragraph>
        <button className="update" onClick={() => props.update(props.data)}>
          Edit
        </button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
