import React, { Component } from "react";
import "./Registrasi.css";

class Registrasi extends Component {
  render() {
    return (
      <>
        <div>
          <div className="form">
            <button type="close">x</button>
            <label className="header">Registrasi</label>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <input type="text" placeholder="masukkan anu"/>
            <button>Register</button>
          </div>
        </div>
      </>
    )
  };
};

export default Registrasi;