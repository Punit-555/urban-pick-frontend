// components/SuccessModal.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./success.css"; // optional styling
import { hideSuccessModal } from "../../redux/features/modals/modalSlice";

const SuccessModal = () => {
  const dispatch = useDispatch();
  const { showSuccess, message } = useSelector((state) => state.modal);

  if (!showSuccess) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>✅ Success</h2>
        <p>{message}</p>
        <button onClick={() => dispatch(hideSuccessModal())}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
