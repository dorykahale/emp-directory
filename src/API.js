import axios from "axios";

export const getUsers = function() {
  return axios.get("https://randomuser.me/api/?results=50&nat=us");
};