import React, { Component } from "react";
import axios from "axios";

class EditProject extends Component {
  state = {
    title: this.props.project.title,
    description: this.props.project.description
  };

  handleSubmit = event => {
    event.preventDefault();

    const title = this.state.title;
    const description = this.state.description;

    axios
      .put(`/api/projects/${this.props.project._id}`, { title, description })
      .then(() => {
        this.props.submitEdit();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit project: </h3>
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

          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}

export default EditProject;
