import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AttendancePage from "./pages/AttendancePage";
import SignUpPage from "./pages/auth/SignUpPage";
import LogInPage from "./pages/auth/LogInPage";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/attend" element={<AttendancePage />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
