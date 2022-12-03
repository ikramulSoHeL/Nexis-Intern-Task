import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "../utils/urls";

export const login = (data) => {
  return axios({
    method: "POST",
    url: LOGIN_URL,
    data: {
      email: data.email,
      password: data.password,
    },
  });
};

export const signup = (data) => {
  return axios({
    method: "POST",
    url: SIGNUP_URL,
    data: {
      first_name: data.firstName,
      last_name: data.lastName,
      phone_number: data.phone,
      email: data.email,
      password: data.password,
    },
  });
};
