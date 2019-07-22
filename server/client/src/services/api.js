import axios from "axios";

const login = (username, password) =>
  axios
    .post("/api/auth/login", { username: username, password: password })
    .then(response => response.data);

const logout = () =>
  axios.post("/api/auth/login").then(response => response.data);

export { login, logout };