import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Student(props) {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-bold heading animate__animated animate__bounce">
              Student:
            </h1>
            <p>Do you want to:</p>
            <div className="btn2">
              <button>
                <Link class="buttonlink" to="/studentlogin">
                  Login
                </Link>
              </button>
              <p>OR</p>
              <button>
                <Link class="buttonlink" to="/studentsignup">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-7">
            {/* <img class="imgabout animate__animated animate__fadeIn animate__delay-1s image" src={map1} alt="some aesthetic shit" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
