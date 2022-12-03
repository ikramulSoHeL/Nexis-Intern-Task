import axios from "axios";
import { ATTENDANCE_URL } from "../utils/urls";

export const getAttendance = (data) => {
  return axios({
    method: "GET",
    url: ATTENDANCE_URL,
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  });
};
