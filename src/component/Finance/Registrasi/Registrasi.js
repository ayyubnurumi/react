import React, { Component } from "react";
import "./Registrasi.css";

class Registrasi extends Component {
  render() {
    return (
      <>
        <div>
          <div className="form">
            <div className="x">
              <button className="x-btn">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <label className="header">Registrasi</label>
            <input type="text" placeholder="masukkan nama organisasi/perusahaan" />
            <input type="text" placeholder="masukkan negara" />
            <input type="text" placeholder="masukkan provinsi" />
            <input type="text" placeholder="masukkan kota" />
            <input type="text" placeholder="masukkan alamat" />
            <input type="text" placeholder="masukkan kode pos" />
            <input type="text" placeholder="masukkan mata uang" />
            <input type="text" placeholder="masukkan bahasa" />
            <input type="text" placeholder="masukkan tanggal" />
            <div className="regist">
              <button className="regist-btn">Register</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Registrasi;