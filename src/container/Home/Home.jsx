import React, { Component } from "react";
// import YTComp from "../../component/YTComp/YTComp";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true
  }

  componentDidMount(){}

  render() {
    return (
      <div>
        {/* <p>youtube component</p>
        <hr/>
        <YTComp time="19.95" title="konspirasi op. eps.1001" desc="978.785 kali ditonton. 29 hari yang lalu."/>
        <YTComp time="11.17" title="konspirasi op. eps.1002" desc="876.786 kali ditonton. 22 hari yang lalu."/>
        <YTComp time="11.95" title="konspirasi op. eps.1003" desc="1.345.567 kali ditonton. 8 hari yang lalu."/>
        <YTComp time="1.35.11" title="konspirasi op. eps.1004" desc=" 1.456.567 kali ditonton. 1 hari yang lalu."/>
        <YTComp />
        <hr/>
        <p>counter</p>
        <hr/>
        <Product /> */}
        <p>lifecycle component</p>
        <hr/>
        {
          this.state.showComponent 
          ?
          <LifeCycleComp/>
          : null
        }
        
      </div>
    )
  }
}


export default Home;
