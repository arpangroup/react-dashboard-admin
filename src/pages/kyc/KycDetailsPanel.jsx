import React from "react";
import ReactDOM from 'react-dom';
import './KycDetailsPanel.css';

const KycDetailsPanel = ({ isOpen, onClose, kycData }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {/* Backdrop */}
      <div className="kyc-backdrop" onClick={onClose} />

      {/* Panel */}
      <aside className="kyc-panel">
        <button
          onClick={onClose}
          className="kyc-close-btn"
          aria-label="Close panel"
        >
          &times;
        </button>

        <h2 className="kyc-header">KYC Details</h2>

        {kycData ? (
          <div className="modal-body popup-body">
            <div className="popup-body-text" id="kyc-action-data">
              <ul className="kyc-list">
                <li className="kyc-list-item">
                  NID Number: <strong>{kycData.nidNumber}</strong>
                </li>
                <li className="kyc-list-item">
                  Image Of NID:
                  <br />
                  <img
                    src={kycData.kycImage}
                    alt="User KYC Screenshot"
                  />
                </li>
                <li className="kyc-list-item">
                  Action Message:
                  <p className="kyc-action-message">{kycData.actionMessage}</p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </aside>
    </>,
    document.body
  );
};

export default KycDetailsPanel;
