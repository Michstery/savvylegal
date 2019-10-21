import React from "react";
import { Link } from "react-router-dom";
import "./task2.css";

const Task3 = () => {
  return (
    <div className="container">
      <div className="jumbotron bg-secondary">
        <h1 style={{ textAlign: "center", color: "white" }}> Add New Task </h1>
        <Link to="/">
          <div style={{ textAlign: "center" }}>
            <button type="button" class="btn btn-warning btn-lg ">
              Go Back >>
            </button>
          </div>
        </Link>
      </div>
      {/* <div class="col-md-5 no-padding lib-item" data-category="view">
        <div class="lib-panel">
          <div class="row box-shadow">
            <div class="col-md-6">
              <img
                class="lib-img-show"
                src="http://lorempixel.com/850/850/?random=123"
              />
            </div>
            <div class="col-md-6">
              <div class="lib-row lib-header">
                Example library
                <div class="lib-header-seperator"></div>
              </div>
              <div class="lib-row lib-desc">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="col-md-12 no-padding lib-item" data-category="view">
        <div class="lib-panel">
          <div class="row box-shadow">
            <div class="col-md-5">
              <div class="lib-row lib-header">
                <h2 contentEditable="true">MEMBERS INVOLVED - </h2>
                <div class="lib-header-seperator"></div>
              </div>
              {/* <div class="lib-row lib-desc">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              </div> */}
              {/* <img
                class="lib-img-show"
                src="http://lorempixel.com/850/850/?random=123"
              /> */}
            </div>
            <div
              class="col-md-7 bg-red "
              style={{ border: "  rgba(219, 54, 21, 0.157) solid 3px" }}
            >
              <div class="lib-row lib-header" contentEditable="true">
                Add New Members
                <div class="lib-header-seperator"></div>
              </div>
              <div class="lib-row lib-desc">
                <div class="container" contentEditable="true">
                  {/* - Kazeem
                  <br />
                  - Ali
                  <br />
                  - Nico
                  <br />
                  - Tim
                  <br />- Mike */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 no-padding lib-item" data-category="view">
        <div class="lib-panel">
          <div class="row box-shadow">
            <div class="col-md-5">
              <div class="lib-row lib-header">
                <h2 contentEditable="true"> DESCRIPTION - </h2>
                <div class="lib-header-seperator"></div>
              </div>
              {/* <div class="lib-row lib-desc">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              </div> */}
              {/* <img
                class="lib-img-show"
                src="http://lorempixel.com/850/850/?random=123"
              /> */}
            </div>
            <div
              class="col-md-7 bg-red "
              style={{ border: "  rgba(219, 54, 21, 0.157) solid 3px" }}
            >
              <div class="lib-row lib-header" contentEditable="true">
                Title
                <div class="lib-header-seperator"></div>
              </div>
              <div class="lib-row lib-desc">
                <div class="container" contentEditable="true">
                  {/* Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                  ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                  dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                  ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                  dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                  ipsum dolor */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 no-padding lib-item" data-category="view">
        <div class="lib-panel">
          <div class="row box-shadow">
            <div class="col-md-5">
              <div class="lib-row lib-header">
                <h2 contentEditable="true"> LOCATION - </h2>
                <div class="lib-header-seperator"></div>
              </div>
              {/* <div class="lib-row lib-desc">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              </div> */}
              {/* <img
                class="lib-img-show"
                src="http://lorempixel.com/850/850/?random=123"
              /> */}
            </div>
            <div
              class="col-md-7 bg-red "
              style={{ border: "  rgba(219, 54, 21, 0.157) solid 3px" }}
            >
              <div class="lib-row lib-header" contentEditable="true">
                Address
                <div class="lib-header-seperator"></div>
              </div>
              <div class="lib-row lib-desc">
                <div class="container" contentEditable="true">
                  {/* no 2, kayode close, akins street, ajinde bus stop, palm
                  groove, lagos state, ikeja . */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 no-padding lib-item" data-category="view">
        <div class="lib-panel">
          <div class="row box-shadow">
            <div class="col-md-5">
              <div class="lib-row lib-header">
                <h2 contentEditable="true"> STATUS - </h2>
                <div class="lib-header-seperator"></div>
              </div>
              {/* <div class="lib-row lib-desc">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              </div> */}
              {/* <img
                class="lib-img-show"
                src="http://lorempixel.com/850/850/?random=123"
              /> */}
            </div>
            <div
              class="col-md-7 bg-red "
              style={{ border: "  rgba(219, 54, 21, 0.157) solid 3px" }}
            >
              <div class="lib-row lib-header" contentEditable="true">
                Project Priority
                <div class="lib-header-seperator"></div>
              </div>
              <div class="lib-row lib-desc">
                <div class="container" contentEditable="true">
                  {/* <h3>ONGOING</h3> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 no-padding lib-item" data-category="view">
        <div class="lib-panel">
          <div class="row box-shadow">
            <div class="col-md-5">
              <div class="lib-row lib-header">
                <h2 contentEditable="true"> ATTACHMENT - </h2>
                <div class="lib-header-seperator"></div>
              </div>
              {/* <div class="lib-row lib-desc">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
              </div> */}
              {/* <img
                class="lib-img-show"
                src="http://lorempixel.com/850/850/?random=123"
              /> */}
            </div>
            <div
              class="col-md-7 bg-red "
              style={{ border: "  rgba(219, 54, 21, 0.157) solid 3px" }}
            >
              <div class="lib-row lib-header" contentEditable="true">
                Drop File Here
                <div class="lib-header-seperator"></div>
              </div>
              <div class="lib-row lib-desc">
                <div class="container" contentEditable="true">
                  <i class="fa fa-file-excel-o fa-4x "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div
          style={{
            textAlign: "center",
            paddingTop: "15px",
            paddingBottom: "15px"
          }}
        >
          <button type="button" class="btn btn-warning btn-lg ">
            Submit Task >>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Task3;
