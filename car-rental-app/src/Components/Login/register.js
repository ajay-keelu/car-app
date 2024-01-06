import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const [regDet, setDetails] = useState({});
  const navigate = useNavigate();
  const [eye, setEye] = useState("fa-eye-slash");
  const [load, setLoad] = useState(false);
  const updateValue = (e) => {
    setDetails({ ...regDet, [e.target.name]: e.target.value });
  };
  const passwordIconChange = () => {
    if (eye === "fa-eye") setEye("fa-eye-slash");
    else setEye("fa-eye");
    // if (document.getElementById("password-reg").type === "text")
    //   document.getElementById("password-reg").type = "password";
    // else document.getElementById("password-reg").type = "text";
  };
  const signUp = (e) => {
    e.preventDefault();
    // console.log(regDet)
    if (
      !regDet.email ||
      regDet.role === "select" ||
      !regDet.mobile ||
      !regDet.password ||
      !regDet.role
    )
      alert("please fill or select correctly");
    else {
      setLoad(true);
      if (regDet.role === "owner") {
        axios
          .post("http://localhost:1001/api/owner/signup/", regDet)
          .then((res) => {
            if (res.data === "Successfully Registered") {
              setLoad(false);
              alert("Successfully Registered");
              alert("login in with your crediantials");
              navigate("/login");
            }
          })
          .catch((err) => {
            alert(err.message);
            setLoad(false);
          });
      } else {
        axios
          .post("http://localhost:1001/api/user/signup/", regDet)
          .then((res) => {
            if (res.data === "Successfully Registered") {
              setLoad(false);
              alert("Successfully Registered");
              alert("login in with your crediantials");
              navigate("/login");
            }
          })
          .catch((err) => {
            alert(err.message);
            setLoad(false);
          });
      }
    }
  };
  return (
    <form onSubmit={signUp}>
      <div className="signup">
        <h3 className="signText">Register Here</h3>
        <div className="signup-input">
          <div className="signup-div">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={updateValue}
              className="cont-spac"
              required
            />
            <span className="signup-span">Full Name</span>
          </div>
          <div className="signup-div">
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              onChange={updateValue}
              className="cont-spac"
              required
            />
            <span className="signup-span">EMAIL</span>
          </div>
          <div className="signup-div">
            <input
              type={eye !== 'fa-eye' ? "password" : "text"}
              id="password-reg"
              placeholder="PASSWORD"
              name="password"
              onChange={updateValue}
              className="cont-spac"
              required
            />
            <span className="signup-span">PASSWORD</span>
            <div className="password-icon" onClick={passwordIconChange}>
              <i className={`fa ${eye}`}></i>
            </div>
          </div>
          <div className="signup-div">
            <input
              type="text"
              placeholder="Mobile number"
              name="mobile"
              onChange={updateValue}
              className="cont-spac"
              required
            />
            <span className="signup-span">Mobile </span>
          </div>
          <div
            className="col-md-4"
            style={{
              margin: "10px",
              display: "flex",
            }}
          >
            <select name="role" onChange={updateValue} required>
              <option value="select">Select Role</option>
              <option value="owner">Owner</option>
              <option value="user">User</option>
            </select>
          </div>
          <div
            className="col-md-4"
            style={{
              margin: "10px",
              display: "flex",
            }}
          >
            <Link
              onClick={() => {
                alert("Sorrry We will reach you ");
              }}
            >
              forgot Password
            </Link>
          </div>
          <div className="signup-div">
            <button type='submit' className="signupSubmit btn btn-primary" >
              {" "}
              {load ? <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div> : ""} &nbsp; Sign
              up
            </button>
          </div>
          <div className="signup-div">
            <code>Already have an account</code> &nbsp;{" "}
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </button>{" "}
            &nbsp; <code> here</code>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;