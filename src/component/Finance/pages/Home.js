import React, { useEffect, useState, Fragment } from "react";
import { getUser, editUser, postUser, deleteUser } from "../services";
import "./Home.css";

export const Home = () => {
  // const [counter, setCounter] = useState(0);
  const [listUser, setListUser] = useState([]);
  const [dataUser, setDataUser] = useState({
    organizationname: "",
    country: "",
    province: "",
    city: "",
    address: "",
    postalcode: "",
    currency: "",
    language: "",
    tanggal: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  // const [name, setName] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // console.log("DATA USER: ", dataUser);

  useEffect(() => {
    getUser(setListUser);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ display: "flex", width: "65%", flexDirection: "column" }}>
          <table>
            <tr>
              <th>organizationname</th>
              <th>country</th>
              <th>province</th>
              <th>city</th>
              <th>address</th>
              <th>postalcode</th>
              <th>currency</th>
              <th>language</th>
              <th>tanggal</th>
            </tr>
            {listUser.map((data, index) => (
              <tr key={data.id}>
                <td>{data.organizationname}</td>
                <td>{data.country}</td>
                <td>{data.province}</td>
                <td>{data.city}</td>
                <td>{data.address}</td>
                <td>{data.postalcode}</td>
                <td>{data.currency}</td>
                <td>{data.language}</td>
                <td>{data.tanggal}</td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        setDataUser(data);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        // console.log(data.id);
                        deleteUser(data.id, setMessage);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="form">
          <div className="sign-in">
            <div>
              <label className="regist">organization name</label>
              <input
                type="text"
                placeholder="Masukkan nama perusahaan/organisasi"
                value={dataUser?.organizationname}
                onChange={(e) => {
                  setDataUser({
                    ...dataUser,
                    organizationname: e.target.value,
                  });
                  // setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="regist">country</label>
              <input
                type="text"
                placeholder="Masukkan negara"
                value={dataUser?.country}
                onChange={(e) => {
                  setDataUser({ ...dataUser, country: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">province</label>
              <input
                type="text"
                placeholder="Masukkan provinsi"
                value={dataUser?.province}
                onChange={(e) => {
                  setDataUser({ ...dataUser, province: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">city</label>
              <input
                type="text"
                placeholder="Masukkan kota"
                value={dataUser?.city}
                onChange={(e) => {
                  setDataUser({ ...dataUser, city: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">address</label>
              <input
                type="text"
                placeholder="Masukkan alamat"
                value={dataUser?.address}
                onChange={(e) => {
                  setDataUser({ ...dataUser, address: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">postalcode</label>
              <input
                type="text"
                placeholder="Masukkan kode post"
                value={dataUser?.postalcode}
                onChange={(e) => {
                  setDataUser({ ...dataUser, postalcode: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">currency</label>
              <input
                type="text"
                placeholder="Masukkan mata uang"
                value={dataUser?.currency}
                onChange={(e) => {
                  setDataUser({ ...dataUser, currency: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">language</label>
              <input
                type="text"
                placeholder="Masukkan bahasa"
                value={dataUser?.language}
                onChange={(e) => {
                  setDataUser({ ...dataUser, language: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="regist">tanggal</label>
              <input
                type="text"
                placeholder="Masukkan tanggal"
                value={dataUser?.tanggal}
                onChange={(e) => {
                  setDataUser({ ...dataUser, tanggal: e.target.value });
                }}
              />
            </div>
          </div>

          {isEditing === false ? (
            <div>
              <button
                onClick={() => {
                  postUser(dataUser, setDataUser, setMessage);
                }}
              >
                Create New
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  editUser(dataUser, setIsEditing, setDataUser, setMessage);
                }}
              >
                Save
              </button>
            </div>
          )}
          <div style={{ marginTop: 30 }}>{message}</div>
          {/* <div>
            <button>Simpan</button>
          </div>
          <div>
            <button
              onClick={() => {
                editUser(dataUser);
              }}
            >
              Edit
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
