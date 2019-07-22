import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import Projects from "./containers/Projects";
import ProjectDetails from "./containers/ProjectDetails";
import TaskDetails from "./containers/TaskDetails";
import Signup from "./containers/Signup";

class App extends React.Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => {
              return <Signup setUser={this.setUser} />;
            }}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/tasks/:id" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
