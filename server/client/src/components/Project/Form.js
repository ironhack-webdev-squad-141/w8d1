import React, { Component } from "react";
import axios from "axios";

export default class ProjectForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // const {title, description} = this.state

    axios
      .post("/api/projects", {
        title: this.state.title,
        description: this.state.description
      })
      .then(() => {
        this.props.refreshList();
        this.setState({
          title: "",
          description: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          onChange={this.handleChange}
          id="title"
          name="title"
          value={this.state.title}
        />

        <label htmlFor="description">Description: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="description"
          id="description"
          value={this.state.description}
        />

        <button type="submit">Add Project</button>
      </form>
    );
  }
}
