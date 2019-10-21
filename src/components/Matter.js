import React from "react";
import { Link } from "react-router-dom";
import Matter2 from "./Matter2";
const Matter = () => {
  return (
    <div class="bg-dark">
      <div className="jumbotron bg-secondary">
        <h1 style={{ textAlign: "center", color: "white" }}> Matter Screen </h1>
        <Link to="/task3">
          <div style={{ textAlign: "center" }}>
            <button type="button" class="btn btn-warning btn-lg ">
              Add New Task >>
            </button>
          </div>
        </Link>
      </div>
      <section class="py-5 bg-dark">
        <div class="container">
          <div class="row mb-3">
            <div class="col-md-11">
              <div class="card shadow">
                <div class="card-body">
                  <div class="row text-center ">
                    <div class="col-md-1 mr-2">
                      <i class="fa fa-hashtag fa-2x ">
                        <h1>1</h1>
                      </i>

                      <br />
                    </div>
                    <div class="col-md-6">
                      <h4 style={{ textAlign: "left" }}>Dashboard</h4>
                      <h4 style={{ textAlign: "left" }}> Details </h4>
                      <p style={{ textAlign: "left" }}>More...</p>
                    </div>
                    <div class="col-md-4">
                      <div class="sub-row">
                        <br />
                        <Link to="/matter2">
                          <button
                            type="button"
                            class="btn btn-warning btn-md mt-11"
                          >
                            More >>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row mb-3">
            <div class="col-md-11">
              <div class="card shadow">
                <div class="card-body">
                  <div class="row text-center ">
                    <div class="col-md-1 mr-2">
                      <i class="fa fa-hashtag fa-2x ">
                        <h1>2</h1>
                      </i>

                      <br />
                    </div>
                    <div class="col-md-6">
                      <h4 style={{ textAlign: "left" }}>Dashboard</h4>
                      <h4 style={{ textAlign: "left" }}> Details </h4>
                      <p style={{ textAlign: "left" }}>More...</p>
                    </div>
                    <div class="col-md-4">
                      <div class="sub-row">
                        <br />
                        <Link to="/matter2">
                          <button
                            type="button"
                            class="btn btn-warning btn-md mt-11"
                          >
                            More >>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to="/task3">
        <div style={{ textAlign: "center", paddingTop: "15px" }}>
          <button type="button" class="btn btn-warning btn-lg ">
            Add New Task >>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Matter;
