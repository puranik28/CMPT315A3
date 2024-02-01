import React from 'react';
import './BodyView.styles.css';

const BodyView = ({ selectedEmail }) => {
  return (
    <div className="body-container">
      <h1 className="heading">Email Body View</h1>
      {selectedEmail && (
        <div className="email-details">
          <h2>{selectedEmail.from}</h2>
          <p>{selectedEmail.address}</p>
          <p>{selectedEmail.time}</p>
          <p>{selectedEmail.subject}</p>
          <p>{selectedEmail.message}</p>
        </div>
      )}
    </div>
  );
};

export default BodyView;
