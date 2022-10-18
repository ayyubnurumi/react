import { Typography } from "antd";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";

const { Title, Paragraph } = Typography

export const FullPost = () => {
    const {id} = useParams()
    const post = async() => await axios.get(`http://localhost:3004/posts/${id}`)
    console.log(post())
    return(
        <div>
            <Title>ini judul</Title>
            <Paragraph>ini isi</Paragraph>
        </div>
    )
}