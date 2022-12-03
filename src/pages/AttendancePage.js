import React, { useEffect, useState } from "react";
import "./attendancePage.scss";

import Logo from "../assets/logo.png";

import AttendanceTable from "../components/table/AttendanceTable";
import { getAttendance } from "../api/attendance.api";
import { loadStorage } from "../utils/persistLocalStorage";

const AttendancePage = () => {
  const accessToken = loadStorage("access_token");
  const [isLoading, setIsLoading] = useState(true);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = () => {
    getAttendance({ accessToken: accessToken })
      .then((res) => {
        console.log(res.data);
        setAttendanceData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="attendancePage">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="attendance__container">
        <div className="header">
          <h2>Attendance information</h2>
        </div>

        {/* TABLE */}
        {isLoading ? (
          <div className="loading">
            <h3>Loading...</h3>
          </div>
        ) : (
          <AttendanceTable attendanceData={attendanceData} />
        )}
      </div>
    </div>
  );
};

export default AttendancePage;
