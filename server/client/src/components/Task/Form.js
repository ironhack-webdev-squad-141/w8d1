import React, { Component } from "react";
import axios from "axios";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title, description } = this.state;

    axios
      .post("/api/tasks", {
        title,
        description,
        projectId: this.props.projectId
      })
      .then(response => {
        this.props.refreshData();
        this.setState({ title: "", description: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Add task: </h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
