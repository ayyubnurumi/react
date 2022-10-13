import React from "react";
import "../YTComp/YTComp.css";
import Abi from "../YTComp/Abi.jpg";



const YTComp = (props) => {
    return (
        <div className="yt-wrapper">
            <div className="img-thumb">
                <img src={Abi} alt="op"></img>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YTComp.defaultProps = {
    time: "00.00",
    title: "title here",
    desc: "xx kali ditonton. xx hari yang lalu."
}

export default YTComp;