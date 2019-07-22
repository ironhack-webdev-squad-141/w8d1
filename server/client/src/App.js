import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import Projects from "./containers/Projects";
import ProjectDetails from "./containers/ProjectDetails";
import TaskDetails from "./containers/TaskDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/tasks/:id" component={TaskDetails} />
      </Switch>
    </div>
  );
}

export default App;
