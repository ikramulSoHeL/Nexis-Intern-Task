import React, { useState } from "react";
import "./auth.scss";

import Logo from "../../assets/logo.png";
import Bg from "../../assets/bg.png";
import { login } from "../../api/auth.api";
import { saveStorage } from "../../utils/persistLocalStorage";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();
  const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    console.log(inputs);
    if (inputs.email === "" || inputs.password === "") {
      alert("Please fill all fields");
      return;
    } else if (!EMAIL_REGEX.test(inputs.email)) {
      alert("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    login(inputs)
      .then((res) => {
        console.log(res.data);

        saveStorage("access_token", res.data.access_token);
        saveStorage("refresh_token", res.data.refresh_token);

        setIsLoading(false);
        navigate("/attend");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="auth__container">
      <div className="leftSide">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="image">
          <img src={Bg} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightSide">
        <div className="formContainer">
          <div className="form">
            <h2>Log in Form</h2>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Write  Email Address"
                  required
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Write Password"
                  required
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>

              <div className="buttonContainer1">
                <button
                  className="nBtn"
                  type="submit"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  Login
                </button>
              </div>
            </div>

            <div className="footer">
              <p>Don't have an account?</p>
              <a href="/">SIGNUP HERE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
