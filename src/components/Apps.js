import React from "react";
import Task from "./Task";
import { BrowserRouter, Route } from "react-router-dom";
import Task2 from "./Task2";
import Case from "./Case";
import Task3 from "./Task3";
import Mainpage from "./Mainpage";
import Matter from "./Matter";
import Matter2 from "./Matter2";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Route path="/" exact component={Task} />
            <Route path="/task2" exact component={Task2} />
            <Route path="/task3" exact component={Task3} />
            <Route path="/case" exact component={Case} />
            <Route path="/mainpage" exact component={Mainpage} />
            <Route path="/matter" exact component={Matter} />
            <Route path="/matter2" exact component={Matter2} />
          </BrowserRouter>
        </div>
        {/* <div className="ui container" style={{ marginTop: "40px" }}>
          <Task />
        </div> */}
      </div>
    );
  }
}

export default App;
