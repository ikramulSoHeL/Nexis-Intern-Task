import React, { useState } from "react";
import "./auth.scss";

import Logo from "../../assets/logo.png";
import Bg from "../../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/auth.api";
// import { saveStorage } from "../../utils/persistLocalStorage";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

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
          {step === 1 ? (
            <NameComponent
              setStep={setStep}
              inputs={inputs}
              setInputs={setInputs}
            />
          ) : step === 2 ? (
            <PhoneComponent
              setStep={setStep}
              inputs={inputs}
              setInputs={setInputs}
            />
          ) : step === 3 ? (
            <PasswordComponent
              setStep={setStep}
              inputs={inputs}
              setInputs={setInputs}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const NameComponent = ({ setStep, inputs, setInputs }) => {
  const sendToNextStep = () => {
    if (inputs.firstName === "") {
      alert("First name is required");
      return;
    } else if (inputs.lastName === "") {
      alert("Last name is required");
      return;
    }
    setStep(2);
  };

  return (
    <div className="form">
      <h2>SignUp Form</h2>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Write first name"
            required
            value={inputs.firstName}
            onChange={(e) =>
              setInputs({ ...inputs, firstName: e.target.value })
            }
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Write last name"
            required
            value={inputs.lastName}
            onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
          />
        </div>

        <div className="buttonContainer1">
          <button className="nBtn" type="button" onClick={sendToNextStep}>
            Next Step
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="footer">
        <p>Already have an account?</p>
        <Link to="/login">LOGIN HERE</Link>
      </div>
    </div>
  );
};

const PhoneComponent = ({ setStep, inputs, setInputs }) => {
  const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  const sendToNextStep = () => {
    if (inputs.phone.length === 0) {
      alert("Phone number is required");
      return;
    } else if (inputs.phone.length < 10) {
      alert("Phone number must be 10 digits");
      return;
    } else if (inputs.phone.length > 10) {
      alert("Phone number must be 10 digits");
      return;
    } else if (inputs.email.length === 0) {
      alert("Email is required");
      return;
    } else if (!EMAIL_REGEX.test(inputs.email)) {
      alert("Email is not valid");
      return;
    }
    setStep(3);
  };

  return (
    <div className="form">
      <h2>SignUp Form</h2>
      <div className="inputs">
        <div className="input">
          <input className="countyCode" type="text" value="+880" disabled />
          <input
            type="number"
            placeholder="1xxxxxxxxxxx"
            required
            value={inputs.phone}
            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Write your email"
            required
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>

        <div className="buttonContainer2">
          <button className="backBtn" type="button" onClick={() => setStep(1)}>
            Back
          </button>
          <button className="nBtn" type="button" onClick={sendToNextStep}>
            Next Step
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const PasswordComponent = ({ setStep, inputs, setInputs }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (inputs.password.length === 0) {
      alert("Password is required");
      return;
    } else if (inputs.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    signup(inputs)
      .then((res) => {
        console.log(res.data);

        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="form">
      <h2>SignUp Form</h2>
      <div className="inputs">
        <div className="input1">
          <input
            type="password"
            placeholder="Write password"
            required
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <label htmlFor="">Your password must be 8 character</label>
        </div>

        <div className="buttonContainer2">
          <button
            className="backBtn"
            type="button"
            onClick={() => setStep(2)}
            disabled={isLoading}
          >
            Back
          </button>
          <button
            className="nBtn"
            type="submit"
            onClick={(e) => handleSignUp(e)}
            disabled={isLoading}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
