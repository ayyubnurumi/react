import React, { Component } from "react";
import { Route, Router, Routes } from "react-router";
import { Link } from "react-router-dom";

import Task from "../../components/Task";

class Home extends Component {
    render(){
        return(
            <Router>
                <nav>
                   <Link />
                   <Link />
                   <Link />
                </nav>
                <Routes>
                    <Route />
                    <Route />
                    <Route />
                </Routes>
                <Task />
            </Router>
        )
    }
}

export default Home;