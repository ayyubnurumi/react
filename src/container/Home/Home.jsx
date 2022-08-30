// libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost";
import YTPage from "../pages/YTPage/YTPage";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import FullPost from "../pages/BlogPost/FullPost/FullPost";

// style
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true
  }

  componentDidMount(){}

  render() {
    return (
      <Router>
        <div>
          <nav className="navigasi">
            <Link to="/">Blogpost</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">Life Cycle</Link>
            <Link to="/youtube-page">Video Page</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" exact element={<BlogPost />} />
          <Route path="/fullpost" element={<FullPost />}>
            <Route path=":id" element={<FullPost />} />
          </Route>
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/youtube-page" element={<YTPage />} />
        </Routes>        
      </Router>  
    )
  }
}


export default Home;
