import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button type="submit">Add</Button>
        </Form>
      </div>
    );
  }
}
