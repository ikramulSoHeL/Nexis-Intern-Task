import * as React from "react";
import "./attendanceTable.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PopupModal from "../popupModal/PopupModal";
import { useState } from "react";

export default function BasicTable({ attendanceData }) {
  const keys = Object.keys(attendanceData);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Table">
      <TableContainer
        className="mainTable"
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ borderBlockEnd: ".3px solid #666666" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Employee Name</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keys.length > 0 &&
              keys.map((item, index) => (
                <TableRow
                  key={index}
                  className="tableRow"
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      align: "center",
                    },
                  }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {attendanceData[item].id}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    {attendanceData[item].name}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    {attendanceData[item].username}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    {attendanceData[item].position}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    {attendanceData[item].branch}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="modalButton"
                    >
                      <i className="fas fa-eye"></i>&nbsp;View Attendance
                    </button>
                    <PopupModal
                      open={openModal}
                      onClose={() => setOpenModal(false)}
                      data={attendanceData[item].attendance}
                    />
                  </TableCell>

                  {/* <div>
                    <h1>Attendance Table</h1>
                    {Object.keys(attendanceData[item].attendance).map(
                      (key, index) => (
                        <div key={index}>
                          <h3>{key}</h3>
                          <div>
                            <span>
                              {attendanceData[item].attendance[key].status}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
