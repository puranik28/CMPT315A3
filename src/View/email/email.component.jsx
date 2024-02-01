import React from "react";
import './email.styles.css';

const EmailCard = ({ email, onClick }) => {
  const { from, address, time, subject} = email;
  return (
    <div className='card-container' onClick={onClick}>
      <h2>{from}</h2>
      <p>{address}</p>
      <p>{time}</p>
      <p>{subject}</p>
    </div>
  );
};

export default EmailCard;