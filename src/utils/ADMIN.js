/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "https://us-central1-foothill-fitness.cloudfunctions.net/api";

export default {
  // Gets user info
  getUser: function () {
    return axios.get(`${URL}/admin/user`, { withCredentials: true });
  },
  // Logs the user out
  logout: function (id) {
    return axios.post(`${URL}/admin/user/logout`, {
      withCredentials: true,
    });
  },
  // Log the user in
  login: function (username, password) {
    return axios.post(
      `${URL}/admin/user/login`,
      { username, password },
      { withCredentials: true }
    );
  },
  // New user registration
  register: function (userData) {
    return axios.post(`${URL}/admin/user/register`, userData);
  },
  update: function (userData, id) {
    return axios.put(`${URL}/admin/user/${id}`, userData);
  },
  remove: function (id) {
    return axios.delete(`${URL}/admin/user/${id}`);
  },
};
