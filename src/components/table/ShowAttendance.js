import * as React from "react";
import "./attendanceTable.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const styleStatus = (status) => {
  if (status === "present") {
    return {
      background: "green ",
      color: "white ",
    };
  } else if (status === "holiday") {
    return {
      background: "#8FC802",
      color: "white",
    };
  } else if (status === "late") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "red",
      color: "white",
    };
  }
};

export default function BasicTable({ data }) {
  const keys = Object.keys(data);

  return (
    <div className="Table">
      <TableContainer
        className="mainTable"
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ borderBlockEnd: ".3px solid #666666" }}>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
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
                    {item}
                  </TableCell>

                  <TableCell align="center" component="th" scope="row">
                    <span
                      className="status"
                      style={styleStatus(data[item].status)}
                    >
                      {data[item].status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
