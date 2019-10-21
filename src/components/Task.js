import React from "react";
import faker from "faker";
import { Link } from "react-router-dom";
// import Task2 from "./Task2";
const Task = () => {
  return (
    <div class="bg-secondary">
      <section class="py-5 bg-secondary">
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
                      <h4 style={{ textAlign: "left" }}>
                        Task : Submission Of Client Forms{" "}
                      </h4>
                      <h4 style={{ textAlign: "left" }}> Date : 01/01/01 </h4>
                      <p style={{ textAlign: "left" }}>
                        DESCRIPTION : Engine Oil Change, Oil Filter Change, Air
                        Filter Change .....
                      </p>
                    </div>
                    <div class="col-md-4">
                      <h3>
                        <small>
                          <input type="checkbox" /> <b> DONE </b> <br />
                        </small>
                        Members :
                        {/* <small>
                        <span class="round-tabs one">
                          <i class="fa fa-home"></i>
                          <img
                            class="round-tabs one"
                            src={faker.image.avatar}
                            alt="faker"
                          />
                        </span>
                      </small> */}
                      </h3>

                      <div class="sub-row">
                        <Link to="/task2">
                          <button type="button" class="btn btn-warning btn-md ">
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

export default Task;
