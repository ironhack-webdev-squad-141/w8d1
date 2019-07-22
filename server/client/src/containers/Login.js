import React, { Component } from "react";
import { login } from "../services/api";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { username, password } = this.state; // const username = this.state.username; const password = this.state.password

    event.preventDefault();

    login(username, password)
      .then(data => {
        this.props.setUser(data);
        this.props.history.push("/projects");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // form w/ username password inputs
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}
