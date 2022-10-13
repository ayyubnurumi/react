import React, { Component, Fragment } from "react";
import "../Product/Product.css";
import Troley from "../Product/Troley.jpg";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
        order: newValue
    })
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://www.zilliondesigns.com/blog/wp-content/uploads/001-min.png"
              alt="logo"
              height="70px"
            />
          </div>
          <div className="troley">
            <img src={Troley} alt="troley" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
