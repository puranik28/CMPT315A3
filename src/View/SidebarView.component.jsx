import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar.component';
import EmailCard from './email/email.component';
import './SidebarView.styles.css';

const SidebarView = ({ emails, onEmailSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEmails = emails.filter((email) =>
    email.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleEmailClick = (selectedEmail) => {
    onEmailSelect(selectedEmail);
  };
  return (
    <div className="sidebar-container">
      <h1 className="heading">Email Sidebar View</h1>
      <SearchBar
        placeholder="Search Bar"
        handleInput={(e) => setSearchTerm(e.target.value)}
      />
      <div className="email-list">
        {filteredEmails.map((email) => (
          <EmailCard
            key={email.id}
            email={email}
            onClick={() => handleEmailClick(email)}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarView;