// libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost";
import YTPage from "../pages/YTPage/YTPage";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import FullPost from "../pages/BlogPost/FullPost/FullPost";

// style
import "./Home.css";

export const Home = () => {
  return (
    <Router>
      <div>
        <nav className="navigasi">
          <Link className="nav-btn" to="/" >Blogpost</Link>
          <Link className="nav-btn" to="/product">Product</Link>
          <Link className="nav-btn" to="/lifecycle">Life Cycle</Link>
          <Link className="nav-btn" to="/youtube-page">Video Page</Link>
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
  );
};
