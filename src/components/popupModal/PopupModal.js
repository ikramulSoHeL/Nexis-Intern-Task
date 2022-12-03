import React from "react";
import "./popupModal.scss";

import ShowAttendance from "../table/ShowAttendance";

const PopupModal = ({ open, onClose, data }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="op__overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="op__modalContainer"
      >
        <div className="op__createQuizPopup__container">
          <div className="op__top">
            <i className="fa-solid fa-times" onClick={onClose}></i>
          </div>

          {/* TABLE */}
          <ShowAttendance data={data} />

          <div className="op__buttonContainer">
            <button className="op__btn op__cancel__btn" onClick={onClose}>
              <i className="fa-solid fa-times"></i>&nbsp; Clode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
