import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
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

    //  make our axios.post
    axios
      .post("/api/auth/signup", { username: username, password: password })
      .then(response => {
        console.log(response.data);
        this.props.setUser(response.data);
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
        <button type="submit">Signup</button>
      </form>
    );
  }
}
